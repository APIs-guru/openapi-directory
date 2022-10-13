from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sortorder_enum


@dataclass_json
@dataclass
class SortCriterion:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Field' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
