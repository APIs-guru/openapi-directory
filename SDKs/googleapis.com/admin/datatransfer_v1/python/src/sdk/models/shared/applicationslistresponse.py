from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import application


@dataclass_json
@dataclass
class ApplicationsListResponse:
    applications: Optional[List[application.Application]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
