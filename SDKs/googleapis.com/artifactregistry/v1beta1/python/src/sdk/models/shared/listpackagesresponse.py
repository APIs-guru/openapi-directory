from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import package


@dataclass_json
@dataclass
class ListPackagesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    packages: Optional[List[package.Package]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    
