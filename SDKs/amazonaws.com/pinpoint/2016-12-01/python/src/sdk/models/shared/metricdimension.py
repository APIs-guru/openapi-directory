from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricDimension:
    r"""MetricDimension
    Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
    """
    
    comparison_operator: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
