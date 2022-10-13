from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import searchresourcescomparator_enum
from . import searchresourcessimplecriterionkey_enum


@dataclass_json
@dataclass
class SearchResourcesSimpleCriterion:
    comparator: Optional[searchresourcescomparator_enum.SearchResourcesComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    key: Optional[searchresourcessimplecriterionkey_enum.SearchResourcesSimpleCriterionKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
