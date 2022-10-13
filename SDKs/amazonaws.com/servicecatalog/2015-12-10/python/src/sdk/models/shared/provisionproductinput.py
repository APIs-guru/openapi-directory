from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisioningparameter
from . import provisioningpreferences
from . import tag


@dataclass_json
@dataclass
class ProvisionProductInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    notification_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationArns' }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathId' }})
    path_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathName' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    provision_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionToken' }})
    provisioned_product_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    provisioning_artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactName' }})
    provisioning_parameters: Optional[List[provisioningparameter.ProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningParameters' }})
    provisioning_preferences: Optional[provisioningpreferences.ProvisioningPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningPreferences' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
