from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import provisioningstatus_enum


@dataclass_json
@dataclass
class ListPermissionSetsProvisionedToAccountRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    provisioning_status: Optional[provisioningstatus_enum.ProvisioningStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningStatus' }})
    
