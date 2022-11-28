from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BoundingPoly:
    r"""BoundingPoly
    A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.
    """
    
    normalized_vertices: Optional[List[NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedVertices') }})
    
