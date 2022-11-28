from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InventoryResultItem:
    r"""InventoryResultItem
    The inventory result item.
    """
    
    content: List[dict[str, str]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    schema_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersion') }})
    type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptureTime') }})
    content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentHash') }})
    
