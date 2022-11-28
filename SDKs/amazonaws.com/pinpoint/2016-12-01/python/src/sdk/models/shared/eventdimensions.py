from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventDimensions:
    r"""EventDimensions
    Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
    """
    
    attributes: Optional[dict[str, AttributeDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    event_type: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    metrics: Optional[dict[str, MetricDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    
