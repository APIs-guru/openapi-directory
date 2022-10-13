from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error


@dataclass_json
@dataclass
class AdResponse:
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adId' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingId' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
