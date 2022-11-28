from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListingStructurePolicyResponse:
    listing_structure_policies: Optional[List[ListingStructurePolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingStructurePolicies') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
