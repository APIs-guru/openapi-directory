from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import workspacedirectorytype_enum
from . import selfservicepermissions
from . import workspacedirectorystate_enum
from . import tenancy_enum
from . import workspaceaccessproperties
from . import defaultworkspacecreationproperties


@dataclass_json
@dataclass
class WorkspaceDirectory:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    customer_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerUserName' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    directory_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryName' }})
    directory_type: Optional[workspacedirectorytype_enum.WorkspaceDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryType' }})
    dns_ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIpAddresses' }})
    iam_role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleId' }})
    registration_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrationCode' }})
    selfservice_permissions: Optional[selfservicepermissions.SelfservicePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfservicePermissions' }})
    state: Optional[workspacedirectorystate_enum.WorkspaceDirectoryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tenancy: Optional[tenancy_enum.TenancyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tenancy' }})
    workspace_access_properties: Optional[workspaceaccessproperties.WorkspaceAccessProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceAccessProperties' }})
    workspace_creation_properties: Optional[defaultworkspacecreationproperties.DefaultWorkspaceCreationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceCreationProperties' }})
    workspace_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceSecurityGroupId' }})
    ip_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipGroupIds' }})
    
