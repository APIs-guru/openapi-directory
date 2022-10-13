from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributedimension
from . import segmentbehaviors
from . import segmentdemographics
from . import segmentlocation
from . import metricdimension
from . import attributedimension


@dataclass_json
@dataclass
class SegmentDimensions:
    attributes: Optional[dict[str, attributedimension.AttributeDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    behavior: Optional[segmentbehaviors.SegmentBehaviors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Behavior' }})
    demographic: Optional[segmentdemographics.SegmentDemographics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Demographic' }})
    location: Optional[segmentlocation.SegmentLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    metrics: Optional[dict[str, metricdimension.MetricDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    user_attributes: Optional[dict[str, attributedimension.AttributeDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAttributes' }})
    
