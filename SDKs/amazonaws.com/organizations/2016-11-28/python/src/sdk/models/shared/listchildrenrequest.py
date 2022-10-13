from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import childtype_enum


@dataclass_json
@dataclass
class ListChildrenRequest:
    child_type: childtype_enum.ChildTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChildType' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentId' }})
    
