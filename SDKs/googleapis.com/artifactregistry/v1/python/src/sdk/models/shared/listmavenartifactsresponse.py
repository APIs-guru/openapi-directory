from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mavenartifact


@dataclass_json
@dataclass
class ListMavenArtifactsResponse:
    maven_artifacts: Optional[List[mavenartifact.MavenArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mavenArtifacts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
