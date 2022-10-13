from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DefaultWorkspaceCreationProperties:
    custom_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomSecurityGroupId' }})
    default_ou: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultOu' }})
    enable_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableInternetAccess' }})
    enable_maintenance_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableMaintenanceMode' }})
    enable_work_docs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableWorkDocs' }})
    user_enabled_as_local_administrator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserEnabledAsLocalAdministrator' }})
    
