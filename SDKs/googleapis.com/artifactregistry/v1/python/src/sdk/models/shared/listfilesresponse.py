from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsartifactregistryv1file


@dataclass_json
@dataclass
class ListFilesResponse:
    files: Optional[List[googledevtoolsartifactregistryv1file.GoogleDevtoolsArtifactregistryV1File]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
