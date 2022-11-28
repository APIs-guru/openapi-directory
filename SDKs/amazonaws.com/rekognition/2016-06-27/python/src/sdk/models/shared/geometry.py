from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Geometry:
    r"""Geometry
    Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.
    """
    
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    polygon: Optional[List[Point]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Polygon') }})
    
