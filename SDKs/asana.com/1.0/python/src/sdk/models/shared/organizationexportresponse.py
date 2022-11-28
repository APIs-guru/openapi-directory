from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrganizationExportResponseStateEnum(str, Enum):
    PENDING = "pending"
    STARTED = "started"
    FINISHED = "finished"
    ERROR = "error"


@dataclass_json
@dataclass
class OrganizationExportResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    organization: Optional[WorkspaceCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    state: Optional[OrganizationExportResponseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
