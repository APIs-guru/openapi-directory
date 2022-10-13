from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeploymentBranchPolicy:
    custom_branch_policies: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_branch_policies' }})
    protected_branches: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protected_branches' }})
    
