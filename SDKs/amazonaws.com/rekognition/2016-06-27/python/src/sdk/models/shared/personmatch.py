from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonMatch:
    r"""PersonMatch
    Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. 
    """
    
    face_matches: Optional[List[FaceMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatches') }})
    person: Optional[PersonDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Person') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
