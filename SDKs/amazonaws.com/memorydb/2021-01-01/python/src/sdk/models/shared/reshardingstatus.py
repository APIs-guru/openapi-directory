from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import slotmigration


@dataclass_json
@dataclass
class ReshardingStatus:
    slot_migration: Optional[slotmigration.SlotMigration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SlotMigration' }})
    
