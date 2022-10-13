from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import importstatus_enum


@dataclass_json
@dataclass
class DeleteImportResponse:
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importId' }})
    import_status: Optional[importstatus_enum.ImportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importStatus' }})
    
