from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProductOutput:
    product_view_detail: Optional[ProductViewDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewDetail') }})
    provisioning_artifact_detail: Optional[ProvisioningArtifactDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactDetail') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
