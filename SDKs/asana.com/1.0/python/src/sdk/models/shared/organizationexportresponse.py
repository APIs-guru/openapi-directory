from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workspacecompact

class OrganizationExportResponseStateEnum(str, Enum):
    PENDING = "pending"
    STARTED = "started"
    FINISHED = "finished"
    ERROR = "error"


@dataclass_json
@dataclass
class OrganizationExportResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    organization: Optional[workspacecompact.WorkspaceCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    state: Optional[OrganizationExportResponseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
