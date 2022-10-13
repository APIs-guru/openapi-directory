from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListProvisioningArtifactsInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    
