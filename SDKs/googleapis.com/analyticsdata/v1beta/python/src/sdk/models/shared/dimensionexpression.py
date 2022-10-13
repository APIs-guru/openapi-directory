from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import concatenateexpression
from . import caseexpression
from . import caseexpression


@dataclass_json
@dataclass
class DimensionExpression:
    concatenate: Optional[concatenateexpression.ConcatenateExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concatenate' }})
    lower_case: Optional[caseexpression.CaseExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowerCase' }})
    upper_case: Optional[caseexpression.CaseExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upperCase' }})
    
