from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeProvisioningParametersInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathId' }})
    path_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathName' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    provisioning_artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactName' }})
    
