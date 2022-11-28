from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DefaultWorkspaceCreationProperties:
    r"""DefaultWorkspaceCreationProperties
    Describes the default values that are used to create WorkSpaces. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html\">Update Directory Details for Your WorkSpaces</a>.
    """
    
    custom_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomSecurityGroupId') }})
    default_ou: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultOu') }})
    enable_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableInternetAccess') }})
    enable_maintenance_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableMaintenanceMode') }})
    enable_work_docs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableWorkDocs') }})
    user_enabled_as_local_administrator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserEnabledAsLocalAdministrator') }})
    
