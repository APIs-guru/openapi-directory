from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PropertyGroup:
    property_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyGroupId' }})
    property_map: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertyMap' }})
    
