from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingbox
from . import emotion
from . import landmark
from . import pose
from . import imagequality
from . import smile


@dataclass_json
@dataclass
class ComparedFace:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    emotions: Optional[List[emotion.Emotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Emotions' }})
    landmarks: Optional[List[landmark.Landmark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Landmarks' }})
    pose: Optional[pose.Pose] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pose' }})
    quality: Optional[imagequality.ImageQuality] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quality' }})
    smile: Optional[smile.Smile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Smile' }})
    
