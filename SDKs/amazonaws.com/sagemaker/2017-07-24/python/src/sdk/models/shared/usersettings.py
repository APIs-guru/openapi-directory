from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserSettings:
    r"""UserSettings
    <p>A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the <code>CreateUserProfile</code> API is called, and as <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called.</p> <p> <code>SecurityGroups</code> is aggregated when specified in both calls. For all other settings in <code>UserSettings</code>, the values specified in <code>CreateUserProfile</code> take precedence over those specified in <code>CreateDomain</code>.</p>
    """
    
    execution_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRole') }})
    jupyter_server_app_settings: Optional[JupyterServerAppSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JupyterServerAppSettings') }})
    kernel_gateway_app_settings: Optional[KernelGatewayAppSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KernelGatewayAppSettings') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    sharing_settings: Optional[SharingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharingSettings') }})
    tensor_board_app_settings: Optional[TensorBoardAppSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TensorBoardAppSettings') }})
    
