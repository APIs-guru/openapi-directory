from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import knowngender


@dataclass_json
@dataclass
class GetCelebrityInfoResponse:
    known_gender: Optional[knowngender.KnownGender] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KnownGender' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Urls' }})
    
