from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filterexpression


@dataclass_json
@dataclass
class FilterExpressionList:
    expressions: Optional[List[filterexpression.FilterExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressions' }})
    
