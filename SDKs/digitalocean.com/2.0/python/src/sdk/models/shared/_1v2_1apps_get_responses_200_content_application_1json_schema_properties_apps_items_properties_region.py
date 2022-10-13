from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion:
    continent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continent' }})
    data_centers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_centers' }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    flag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
