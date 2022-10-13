from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exportstatus_enum
from . import exporttype_enum
from . import resourcetype_enum


@dataclass_json
@dataclass
class GetExportResponse:
    export_status: Optional[exportstatus_enum.ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportStatus' }})
    export_type: Optional[exporttype_enum.ExportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportType' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
