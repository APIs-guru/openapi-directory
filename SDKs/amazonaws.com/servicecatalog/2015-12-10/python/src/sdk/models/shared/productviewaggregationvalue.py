from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductViewAggregationValue:
    r"""ProductViewAggregationValue
    A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.
    """
    
    approximate_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApproximateCount') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
