from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonDetection:
    r"""PersonDetection
    <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
    """
    
    person: Optional[PersonDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Person') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
