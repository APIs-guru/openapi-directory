from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import provisioningartifactguidance_enum


@dataclass_json
@dataclass
class UpdateProvisioningArtifactInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    guidance: Optional[provisioningartifactguidance_enum.ProvisioningArtifactGuidanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Guidance' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    provisioning_artifact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    
