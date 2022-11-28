from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkspaceDirectory:
    r"""WorkspaceDirectory
    Describes a directory that is used with Amazon WorkSpaces.
    """
    
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    customer_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerUserName') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    directory_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    directory_type: Optional[WorkspaceDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryType') }})
    dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddresses') }})
    iam_role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleId') }})
    registration_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationCode') }})
    selfservice_permissions: Optional[SelfservicePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfservicePermissions') }})
    state: Optional[WorkspaceDirectoryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    tenancy: Optional[TenancyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancy') }})
    workspace_access_properties: Optional[WorkspaceAccessProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceAccessProperties') }})
    workspace_creation_properties: Optional[DefaultWorkspaceCreationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceCreationProperties') }})
    workspace_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceSecurityGroupId') }})
    ip_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipGroupIds') }})
    
