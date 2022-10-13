from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inventorydeletionsummary


@dataclass_json
@dataclass
class DeleteInventoryResult:
    deletion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionId' }})
    deletion_summary: Optional[inventorydeletionsummary.InventoryDeletionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionSummary' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
