from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import budgetdetail
from . import productviewdetail
from . import provisioningartifactsummary
from . import tagoptiondetail
from . import tag


@dataclass_json
@dataclass
class DescribeProductAsAdminOutput:
    budgets: Optional[List[budgetdetail.BudgetDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Budgets' }})
    product_view_detail: Optional[productviewdetail.ProductViewDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewDetail' }})
    provisioning_artifact_summaries: Optional[List[provisioningartifactsummary.ProvisioningArtifactSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactSummaries' }})
    tag_options: Optional[List[tagoptiondetail.TagOptionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagOptions' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
