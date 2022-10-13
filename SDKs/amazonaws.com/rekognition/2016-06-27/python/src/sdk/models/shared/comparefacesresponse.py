from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import comparefacesmatch
from . import comparedsourceimageface
from . import orientationcorrection_enum
from . import orientationcorrection_enum
from . import comparedface


@dataclass_json
@dataclass
class CompareFacesResponse:
    face_matches: Optional[List[comparefacesmatch.CompareFacesMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatches' }})
    source_image_face: Optional[comparedsourceimageface.ComparedSourceImageFace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceImageFace' }})
    source_image_orientation_correction: Optional[orientationcorrection_enum.OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceImageOrientationCorrection' }})
    target_image_orientation_correction: Optional[orientationcorrection_enum.OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetImageOrientationCorrection' }})
    unmatched_faces: Optional[List[comparedface.ComparedFace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnmatchedFaces' }})
    
