from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentDemographics:
    r"""SegmentDemographics
    Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
    """
    
    app_version: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppVersion') }})
    channel: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channel') }})
    device_type: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceType') }})
    make: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Make') }})
    model: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Model') }})
    platform: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Platform') }})
    
