from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionSet:
    r"""RegionSet
    This complex type contains the regionIncluded and regionExcluded fields, which indicate the areas to where the seller does and doesn't ship. Normally a seller ships to as many areas as possible using both DOMESTIC and INTERNATIONAL shipping options, and they don't have a need to exclude any regions from their ship-to locations. Here, there's no reason to set regionExcluded fields. However, it makes sense to set the regionExcluded field when a seller wants to exclude a small area that's within a larger area they service. For example, suppose a seller indicates they ship 'Worldwide', but for some reason must exclude a specific country, or world region. Note: Configuring the shipToLocations is tricky because the regionIncluded and regionExcluded fields are valid in different parts of the schema and their allowable settings vary upon the context. For details on setting these fields, see .
    """
    
    region_excluded: Optional[List[Region]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionExcluded') }})
    region_included: Optional[List[Region]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionIncluded') }})
    
