from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisioningparameter


@dataclass_json
@dataclass
class ServiceCatalogProvisioningDetails:
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathId' }})
    product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    provisioning_artifact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    provisioning_parameters: Optional[List[provisioningparameter.ProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningParameters' }})
    
