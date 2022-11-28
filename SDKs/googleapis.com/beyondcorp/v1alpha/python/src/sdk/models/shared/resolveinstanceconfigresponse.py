from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResolveInstanceConfigResponse:
    r"""ResolveInstanceConfigResponse
    Response message for BeyondCorp.ResolveInstanceConfig.
    """
    
    instance_config: Optional[ConnectorInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceConfig') }})
    
