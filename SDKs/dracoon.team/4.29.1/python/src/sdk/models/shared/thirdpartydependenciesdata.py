from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThirdPartyDependenciesData:
    artifact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactId' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    licenses: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenses' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
