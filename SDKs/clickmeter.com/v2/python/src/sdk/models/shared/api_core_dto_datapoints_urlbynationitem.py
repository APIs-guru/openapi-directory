from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoDatapointsURLByNationItem:
    nation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nation' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
