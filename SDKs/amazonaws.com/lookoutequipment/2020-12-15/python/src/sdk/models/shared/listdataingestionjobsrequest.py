from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ingestionjobstatus_enum


@dataclass_json
@dataclass
class ListDataIngestionJobsRequest:
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[ingestionjobstatus_enum.IngestionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
