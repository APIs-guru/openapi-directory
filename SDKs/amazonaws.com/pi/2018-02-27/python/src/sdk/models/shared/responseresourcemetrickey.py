from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResponseResourceMetricKey:
    r"""ResponseResourceMetricKey
    An object describing a Performance Insights metric and one or more dimensions for that metric.
    """
    
    metric: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metric') }})
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    
