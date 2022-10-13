from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportAsProvisionedProductInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    physical_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhysicalId' }})
    product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    provisioned_product_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    provisioning_artifact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    
