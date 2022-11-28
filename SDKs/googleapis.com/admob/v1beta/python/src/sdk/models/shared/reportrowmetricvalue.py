from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportRowMetricValue:
    r"""ReportRowMetricValue
    Representation of a metric value.
    """
    
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    micros_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsValue') }})
    
