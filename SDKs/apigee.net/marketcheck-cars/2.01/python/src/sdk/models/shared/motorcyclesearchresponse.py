from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MotorcycleSearchResponse:
    r"""MotorcycleSearchResponse
    Motorcycle search query response
    """
    
    facets: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    listings: Optional[List[MotorcycleBaseListing]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    num_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_found') }})
    range_facets: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range_facets') }})
    stats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
