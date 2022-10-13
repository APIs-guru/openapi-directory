from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import geomatchset


@dataclass_json
@dataclass
class CreateGeoMatchSetResponse:
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    geo_match_set: Optional[geomatchset.GeoMatchSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeoMatchSet' }})
    
