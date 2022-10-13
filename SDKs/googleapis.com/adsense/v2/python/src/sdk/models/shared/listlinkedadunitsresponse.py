from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adunit


@dataclass_json
@dataclass
class ListLinkedAdUnitsResponse:
    ad_units: Optional[List[adunit.AdUnit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adUnits' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
