from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apiversion


@dataclass_json
@dataclass
class ListAPIVersionsResponse:
    api_versions: Optional[List[apiversion.APIVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
