from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApigatewayGatewayConfig:
    r"""ApigatewayGatewayConfig
    Configuration settings for Gateways.
    """
    
    backend_config: Optional[ApigatewayBackendConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendConfig') }})
    
