from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryitemschema


@dataclass_json
@dataclass
class GetInventorySchemaResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schemas: Optional[List[inventoryitemschema.InventoryItemSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schemas' }})
    
