from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AlgorithmImage:
    docker_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerURI' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
