from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filterexpressionlist
from . import filter
from . import filterexpression
from . import filterexpressionlist


@dataclass_json
@dataclass
class FilterExpression:
    and_group: Optional[filterexpressionlist.FilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'andGroup' }})
    filter: Optional[filter.Filter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    not_expression: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notExpression' }})
    or_group: Optional[filterexpressionlist.FilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orGroup' }})
    
