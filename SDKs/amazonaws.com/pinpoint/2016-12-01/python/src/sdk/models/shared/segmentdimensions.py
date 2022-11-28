from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentDimensions:
    r"""SegmentDimensions
    Specifies the dimension settings for a segment.
    """
    
    attributes: Optional[dict[str, AttributeDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    behavior: Optional[SegmentBehaviors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Behavior') }})
    demographic: Optional[SegmentDemographics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Demographic') }})
    location: Optional[SegmentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    metrics: Optional[dict[str, MetricDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    user_attributes: Optional[dict[str, AttributeDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    
