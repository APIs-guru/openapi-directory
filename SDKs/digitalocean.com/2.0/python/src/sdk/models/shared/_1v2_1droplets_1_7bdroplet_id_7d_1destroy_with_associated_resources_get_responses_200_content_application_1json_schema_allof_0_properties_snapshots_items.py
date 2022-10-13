from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems:
    cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
