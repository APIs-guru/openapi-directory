from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryOptions:
    r"""DeliveryOptions
    Used to associate a configuration set with a dedicated IP pool.
    """
    
    sending_pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingPoolName') }})
    tls_policy: Optional[TLSPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TlsPolicy') }})
    
