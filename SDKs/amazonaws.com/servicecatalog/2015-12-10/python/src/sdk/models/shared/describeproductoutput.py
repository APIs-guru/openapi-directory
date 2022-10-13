from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import budgetdetail
from . import launchpath
from . import productviewsummary
from . import provisioningartifact


@dataclass_json
@dataclass
class DescribeProductOutput:
    budgets: Optional[List[budgetdetail.BudgetDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Budgets' }})
    launch_paths: Optional[List[launchpath.LaunchPath]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchPaths' }})
    product_view_summary: Optional[productviewsummary.ProductViewSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewSummary' }})
    provisioning_artifacts: Optional[List[provisioningartifact.ProvisioningArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifacts' }})
    
