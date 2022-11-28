from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InventoryItem:
    r"""InventoryItem
    Information collected from managed instances based on your inventory policy document
    """
    
    capture_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptureTime') }})
    schema_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersion') }})
    type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    content: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentHash') }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Context') }})
    
