from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerserviceprotocol_enum


@dataclass_json
@dataclass
class Container:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    ports: Optional[dict[str, containerserviceprotocol_enum.ContainerServiceProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    
