from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agerange
from . import beard
from . import boundingbox
from . import emotion
from . import eyeglasses
from . import eyeopen
from . import gender
from . import landmark
from . import mouthopen
from . import mustache
from . import pose
from . import imagequality
from . import smile
from . import sunglasses


@dataclass_json
@dataclass
class FaceDetail:
    age_range: Optional[agerange.AgeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgeRange' }})
    beard: Optional[beard.Beard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Beard' }})
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    emotions: Optional[List[emotion.Emotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Emotions' }})
    eyeglasses: Optional[eyeglasses.Eyeglasses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Eyeglasses' }})
    eyes_open: Optional[eyeopen.EyeOpen] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EyesOpen' }})
    gender: Optional[gender.Gender] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    landmarks: Optional[List[landmark.Landmark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Landmarks' }})
    mouth_open: Optional[mouthopen.MouthOpen] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MouthOpen' }})
    mustache: Optional[mustache.Mustache] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mustache' }})
    pose: Optional[pose.Pose] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pose' }})
    quality: Optional[imagequality.ImageQuality] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quality' }})
    smile: Optional[smile.Smile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Smile' }})
    sunglasses: Optional[sunglasses.Sunglasses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sunglasses' }})
    
