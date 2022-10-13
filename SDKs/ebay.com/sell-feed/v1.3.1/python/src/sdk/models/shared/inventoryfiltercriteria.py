from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import daterange
from . import daterange


@dataclass_json
@dataclass
class InventoryFilterCriteria:
    creation_date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateRange' }})
    listing_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingFormat' }})
    listing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingStatus' }})
    modified_date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedDateRange' }})
    
