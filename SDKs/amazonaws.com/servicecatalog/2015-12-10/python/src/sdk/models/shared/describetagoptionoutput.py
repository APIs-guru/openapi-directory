from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tagoptiondetail


@dataclass_json
@dataclass
class DescribeTagOptionOutput:
    tag_option_detail: Optional[tagoptiondetail.TagOptionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagOptionDetail' }})
    
