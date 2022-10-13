from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsiamattachedmanagedpolicy
from . import awsiamgrouppolicy


@dataclass_json
@dataclass
class AwsIamGroupDetails:
    attached_managed_policies: Optional[List[awsiamattachedmanagedpolicy.AwsIamAttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachedManagedPolicies' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    group_policy_list: Optional[List[awsiamgrouppolicy.AwsIamGroupPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupPolicyList' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    
