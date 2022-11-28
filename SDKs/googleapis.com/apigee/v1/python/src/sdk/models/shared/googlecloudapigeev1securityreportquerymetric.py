from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityReportQueryMetric:
    r"""GoogleCloudApigeeV1SecurityReportQueryMetric
    Metric of the Query
    """
    
    aggregation_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationFunction') }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
