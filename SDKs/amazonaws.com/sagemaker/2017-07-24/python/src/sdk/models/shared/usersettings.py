from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jupyterserverappsettings
from . import kernelgatewayappsettings
from . import sharingsettings
from . import tensorboardappsettings


@dataclass_json
@dataclass
class UserSettings:
    execution_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRole' }})
    jupyter_server_app_settings: Optional[jupyterserverappsettings.JupyterServerAppSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JupyterServerAppSettings' }})
    kernel_gateway_app_settings: Optional[kernelgatewayappsettings.KernelGatewayAppSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KernelGatewayAppSettings' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    sharing_settings: Optional[sharingsettings.SharingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharingSettings' }})
    tensor_board_app_settings: Optional[tensorboardappsettings.TensorBoardAppSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TensorBoardAppSettings' }})
    
