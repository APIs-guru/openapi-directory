from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inventoryfiltercriteria


@dataclass_json
@dataclass
class CreateInventoryTaskRequest:
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedType' }})
    filter_criteria: Optional[inventoryfiltercriteria.InventoryFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterCriteria' }})
    inventory_file_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryFileTemplate' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    
