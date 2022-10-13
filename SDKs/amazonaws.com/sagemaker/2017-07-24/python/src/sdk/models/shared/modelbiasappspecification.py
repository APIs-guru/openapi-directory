from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModelBiasAppSpecification:
    config_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigUri' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    image_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUri' }})
    
