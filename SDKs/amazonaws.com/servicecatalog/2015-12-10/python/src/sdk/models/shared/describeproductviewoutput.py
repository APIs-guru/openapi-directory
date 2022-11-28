from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeProductViewOutput:
    product_view_summary: Optional[ProductViewSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewSummary') }})
    provisioning_artifacts: Optional[List[ProvisioningArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifacts') }})
    
