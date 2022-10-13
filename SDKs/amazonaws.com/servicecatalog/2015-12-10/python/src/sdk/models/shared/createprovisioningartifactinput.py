from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import provisioningartifactproperties


@dataclass_json
@dataclass
class CreateProvisioningArtifactInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    parameters: provisioningartifactproperties.ProvisioningArtifactProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    
