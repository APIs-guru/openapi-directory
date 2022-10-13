from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import facesearchsortby_enum


@dataclass_json
@dataclass
class GetFaceSearchRequest:
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[facesearchsortby_enum.FaceSearchSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    
