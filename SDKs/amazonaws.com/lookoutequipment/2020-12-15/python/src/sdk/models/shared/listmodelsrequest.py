from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import modelstatus_enum


@dataclass_json
@dataclass
class ListModelsRequest:
    dataset_name_begins_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetNameBeginsWith' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    model_name_begins_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelNameBeginsWith' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[modelstatus_enum.ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
