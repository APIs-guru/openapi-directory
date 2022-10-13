from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import property


@dataclass_json
@dataclass
class CompositeModelProperty:
    asset_property: property.Property = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetProperty' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
