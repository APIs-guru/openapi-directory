from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import provisioningstatus_enum


@dataclass_json
@dataclass
class ListAccountsForProvisionedPermissionSetRequest:
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    permission_set_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    provisioning_status: Optional[provisioningstatus_enum.ProvisioningStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningStatus' }})
    
