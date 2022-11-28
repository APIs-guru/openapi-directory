from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CriterionAdditionalProperties:
    r"""CriterionAdditionalProperties
    Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href=\"https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html\">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.
    """
    
    eq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eq') }})
    eq_exact_match: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eqExactMatch') }})
    gt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gt') }})
    gte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gte') }})
    lt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lt') }})
    lte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lte') }})
    neq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neq') }})
    
