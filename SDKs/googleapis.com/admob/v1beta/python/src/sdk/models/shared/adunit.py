from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdUnit:
    ad_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adFormat' }})
    ad_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adTypes' }})
    ad_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adUnitId' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
