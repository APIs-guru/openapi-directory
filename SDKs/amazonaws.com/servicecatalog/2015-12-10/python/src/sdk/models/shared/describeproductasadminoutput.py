from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeProductAsAdminOutput:
    budgets: Optional[List[BudgetDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    product_view_detail: Optional[ProductViewDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewDetail') }})
    provisioning_artifact_summaries: Optional[List[ProvisioningArtifactSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactSummaries') }})
    tag_options: Optional[List[TagOptionDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptions') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
