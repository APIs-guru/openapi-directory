from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceperimeter


@dataclass_json
@dataclass
class ListServicePerimetersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    service_perimeters: Optional[List[serviceperimeter.ServicePerimeter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicePerimeters' }})
    
