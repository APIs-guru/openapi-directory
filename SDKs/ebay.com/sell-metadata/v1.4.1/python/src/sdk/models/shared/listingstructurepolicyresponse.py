from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listingstructurepolicy
from . import error


@dataclass_json
@dataclass
class ListingStructurePolicyResponse:
    listing_structure_policies: Optional[List[listingstructurepolicy.ListingStructurePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingStructurePolicies' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
