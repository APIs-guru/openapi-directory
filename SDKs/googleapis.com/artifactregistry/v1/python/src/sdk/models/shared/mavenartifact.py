from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MavenArtifact:
    artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pom_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pomUri' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
