from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomChannelTargetingInfo:
    ads_appear_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsAppearOn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    site_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteLanguage' }})
    

@dataclass_json
@dataclass
class CustomChannel:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    targeting_info: Optional[CustomChannelTargetingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingInfo' }})
    
