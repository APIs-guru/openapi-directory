from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeploymentBranchPolicy:
    r"""DeploymentBranchPolicy
    The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
    """
    
    custom_branch_policies: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_branch_policies') }})
    protected_branches: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protected_branches') }})
    
