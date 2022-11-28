from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BucketCriteriaAdditionalProperties:
    r"""BucketCriteriaAdditionalProperties
    Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.
    """
    
    eq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eq') }})
    gt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gt') }})
    gte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gte') }})
    lt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lt') }})
    lte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lte') }})
    neq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neq') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
