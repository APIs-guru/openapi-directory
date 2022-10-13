from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoentity
from . import errorsentity


@dataclass_json
@dataclass
class StatusEntity:
    clickwrap_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickwrap_body' }})
    clickwrap_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickwrap_id' }})
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[autoentity.AutoEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    errors: Optional[errorsentity.ErrorsEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
