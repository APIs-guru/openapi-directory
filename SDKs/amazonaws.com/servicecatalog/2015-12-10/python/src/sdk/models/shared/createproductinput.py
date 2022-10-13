from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import producttype_enum
from . import provisioningartifactproperties
from . import tag


@dataclass_json
@dataclass
class CreateProductInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Distributor' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    product_type: producttype_enum.ProductTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductType' }})
    provisioning_artifact_parameters: provisioningartifactproperties.ProvisioningArtifactProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactParameters' }})
    support_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportDescription' }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportEmail' }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportUrl' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
