from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exportstatus_enum


@dataclass_json
@dataclass
class DeleteExportResponse:
    export_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportId' }})
    export_status: Optional[exportstatus_enum.ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportStatus' }})
    
