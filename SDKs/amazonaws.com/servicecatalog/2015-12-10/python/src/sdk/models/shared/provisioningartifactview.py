from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisioningArtifactView:
    r"""ProvisioningArtifactView
    An object that contains summary information about a product view and a provisioning artifact.
    """
    
    product_view_summary: Optional[ProductViewSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewSummary') }})
    provisioning_artifact: Optional[ProvisioningArtifact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifact') }})
    
