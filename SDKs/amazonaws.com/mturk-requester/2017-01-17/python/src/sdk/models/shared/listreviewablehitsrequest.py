from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reviewablehitstatus_enum


@dataclass_json
@dataclass
class ListReviewableHiTsRequest:
    hit_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITTypeId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[reviewablehitstatus_enum.ReviewableHitStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
