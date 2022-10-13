from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productviewsummary
from . import provisioningartifact


@dataclass_json
@dataclass
class ProvisioningArtifactView:
    product_view_summary: Optional[productviewsummary.ProductViewSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductViewSummary' }})
    provisioning_artifact: Optional[provisioningartifact.ProvisioningArtifact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifact' }})
    
