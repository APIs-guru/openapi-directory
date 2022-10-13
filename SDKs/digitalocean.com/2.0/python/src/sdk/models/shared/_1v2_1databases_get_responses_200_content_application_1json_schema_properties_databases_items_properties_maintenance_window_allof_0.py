from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesMaintenanceWindowAllOf0:
    day: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hour: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    
