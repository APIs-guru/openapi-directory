from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppSpecification:
    container_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerArguments' }})
    container_entrypoint: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerEntrypoint' }})
    image_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUri' }})
    
