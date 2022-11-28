from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FaceDetail:
    r"""FaceDetail
    <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
    """
    
    age_range: Optional[AgeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgeRange') }})
    beard: Optional[Beard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beard') }})
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    emotions: Optional[List[Emotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Emotions') }})
    eyeglasses: Optional[Eyeglasses] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Eyeglasses') }})
    eyes_open: Optional[EyeOpen] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EyesOpen') }})
    gender: Optional[Gender] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    landmarks: Optional[List[Landmark]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Landmarks') }})
    mouth_open: Optional[MouthOpen] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MouthOpen') }})
    mustache: Optional[Mustache] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mustache') }})
    pose: Optional[Pose] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pose') }})
    quality: Optional[ImageQuality] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quality') }})
    smile: Optional[Smile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Smile') }})
    sunglasses: Optional[Sunglasses] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sunglasses') }})
    
