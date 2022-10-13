from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tagoptiondetail


@dataclass_json
@dataclass
class ListTagOptionsOutput:
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    tag_option_details: Optional[List[tagoptiondetail.TagOptionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagOptionDetails' }})
    
