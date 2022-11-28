from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlaceGeometry:
    r"""PlaceGeometry
    Places uses a point geometry to specify a location or a Place.
    """
    
    point: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Point') }})
    
