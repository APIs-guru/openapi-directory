from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FilterExpression:
    r"""FilterExpression
    JSON template for an Analytics filter expression.
    """
    
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    expression_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressionValue') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldIndex') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    match_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    
