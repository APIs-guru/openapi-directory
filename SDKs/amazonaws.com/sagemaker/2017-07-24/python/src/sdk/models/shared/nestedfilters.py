from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import filter


@dataclass_json
@dataclass
class NestedFilters:
    filters: List[filter.Filter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    nested_property_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NestedPropertyName' }})
    
