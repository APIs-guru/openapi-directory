from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HandshakeResource:
    r"""HandshakeResource
    Contains additional data that is needed to process a handshake.
    """
    
    resources: Optional[List[HandshakeResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    type: Optional[HandshakeResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
