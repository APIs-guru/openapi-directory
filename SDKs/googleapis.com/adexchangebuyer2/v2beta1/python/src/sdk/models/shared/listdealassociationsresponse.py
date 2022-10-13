from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import creativedealassociation


@dataclass_json
@dataclass
class ListDealAssociationsResponse:
    associations: Optional[List[creativedealassociation.CreativeDealAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
