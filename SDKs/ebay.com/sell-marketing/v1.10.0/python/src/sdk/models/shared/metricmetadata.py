from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricMetadata:
    r"""MetricMetadata
    This type defines the name and data type of a metric.
    """
    
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    metric_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKey') }})
    
