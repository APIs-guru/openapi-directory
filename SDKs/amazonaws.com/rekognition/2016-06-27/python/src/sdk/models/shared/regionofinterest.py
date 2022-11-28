from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionOfInterest:
    r"""RegionOfInterest
    <p>Specifies a location within the frame that Rekognition checks for text. Uses a <code>BoundingBox</code> object to set a region of the screen.</p> <p>A word is included in the region if the word is more than half in that region. If there is more than one region, the word will be compared with all regions of the screen. Any word more than half in a region is kept in the results.</p>
    """
    
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    
