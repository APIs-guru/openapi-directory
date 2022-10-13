from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updateprovisioningparameter
from . import updateprovisioningpreferences
from . import tag


@dataclass_json
@dataclass
class UpdateProvisionedProductInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathId' }})
    path_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathName' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    provisioned_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    provisioning_artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactName' }})
    provisioning_parameters: Optional[List[updateprovisioningparameter.UpdateProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningParameters' }})
    provisioning_preferences: Optional[updateprovisioningpreferences.UpdateProvisioningPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningPreferences' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    update_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
