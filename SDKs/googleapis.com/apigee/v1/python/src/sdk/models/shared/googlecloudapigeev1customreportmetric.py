from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CustomReportMetric:
    r"""GoogleCloudApigeeV1CustomReportMetric
    This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum
    """
    
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
