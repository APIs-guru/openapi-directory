from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class DescribeTagsResult:
    tag_list: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    
