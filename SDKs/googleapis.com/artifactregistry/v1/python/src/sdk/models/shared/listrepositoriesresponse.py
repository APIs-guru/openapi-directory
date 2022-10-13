from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repository


@dataclass_json
@dataclass
class ListRepositoriesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    repositories: Optional[List[repository.Repository]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    
