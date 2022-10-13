from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcedetail


@dataclass_json
@dataclass
class ListResourcesForTagOptionOutput:
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    resource_details: Optional[List[resourcedetail.ResourceDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceDetails' }})
    
