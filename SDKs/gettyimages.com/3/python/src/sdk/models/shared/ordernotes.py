from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderNotes:
    licensee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensee_name' }})
    ordered_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordered_by' }})
    project_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_title' }})
    purchase_order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order_number' }})
    
