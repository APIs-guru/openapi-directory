from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import setdimension
from . import setdimension
from . import setdimension
from . import setdimension
from . import setdimension
from . import setdimension


@dataclass_json
@dataclass
class SegmentDemographics:
    app_version: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppVersion' }})
    channel: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Channel' }})
    device_type: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceType' }})
    make: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Make' }})
    model: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Model' }})
    platform: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    
