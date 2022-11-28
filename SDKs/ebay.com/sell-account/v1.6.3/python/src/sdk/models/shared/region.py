from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Region:
    r"""Region
    This type defines information for a region.
    """
    
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    region_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionType') }})
    
