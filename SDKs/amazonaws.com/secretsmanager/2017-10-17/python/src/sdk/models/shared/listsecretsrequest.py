from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filter
from . import sortordertype_enum


@dataclass_json
@dataclass
class ListSecretsRequest:
    filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_order: Optional[sortordertype_enum.SortOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
