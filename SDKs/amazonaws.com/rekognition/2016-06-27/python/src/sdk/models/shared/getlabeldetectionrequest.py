from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import labeldetectionsortby_enum


@dataclass_json
@dataclass
class GetLabelDetectionRequest:
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[labeldetectionsortby_enum.LabelDetectionSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    
