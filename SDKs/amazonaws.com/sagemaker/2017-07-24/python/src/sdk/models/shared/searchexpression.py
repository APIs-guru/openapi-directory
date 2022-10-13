from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filter
from . import nestedfilters
from . import booleanoperator_enum
from . import searchexpression


@dataclass_json
@dataclass
class SearchExpression:
    filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    nested_filters: Optional[List[nestedfilters.NestedFilters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NestedFilters' }})
    operator: Optional[booleanoperator_enum.BooleanOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operator' }})
    sub_expressions: Optional[List[searchexpression.SearchExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubExpressions' }})
    
