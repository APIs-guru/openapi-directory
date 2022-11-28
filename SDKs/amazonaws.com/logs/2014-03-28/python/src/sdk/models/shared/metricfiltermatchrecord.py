from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricFilterMatchRecord:
    r"""MetricFilterMatchRecord
    Represents a matched event.
    """
    
    event_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventMessage') }})
    event_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventNumber') }})
    extracted_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractedValues') }})
    
