from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KycCheck:
    alert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alert' }})
    data_required: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRequired' }})
    detail_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailMessage' }})
    due_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dueDate' }})
    remedy_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remedyUrl' }})
    
