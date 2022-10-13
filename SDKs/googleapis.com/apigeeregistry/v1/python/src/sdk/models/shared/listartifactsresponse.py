from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artifact


@dataclass_json
@dataclass
class ListArtifactsResponse:
    artifacts: Optional[List[artifact.Artifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
