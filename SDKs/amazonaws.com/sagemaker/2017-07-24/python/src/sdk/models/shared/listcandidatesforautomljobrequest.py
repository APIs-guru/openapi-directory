from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import candidatesortby_enum
from . import automlsortorder_enum
from . import candidatestatus_enum


@dataclass_json
@dataclass
class ListCandidatesForAutoMlJobRequest:
    auto_ml_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobName' }})
    candidate_name_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateNameEquals' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[candidatesortby_enum.CandidateSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[automlsortorder_enum.AutoMlSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    status_equals: Optional[candidatestatus_enum.CandidateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusEquals' }})
    
