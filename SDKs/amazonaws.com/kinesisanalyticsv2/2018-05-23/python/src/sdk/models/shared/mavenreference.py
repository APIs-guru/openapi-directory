from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MavenReference:
    artifact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactId' }})
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
