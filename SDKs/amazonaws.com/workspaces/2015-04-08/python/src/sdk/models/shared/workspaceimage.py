from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operatingsystem
from . import workspaceimagerequiredtenancy_enum
from . import workspaceimagestate_enum


@dataclass_json
@dataclass
class WorkspaceImage:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operating_system: Optional[operatingsystem.OperatingSystem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerAccountId' }})
    required_tenancy: Optional[workspaceimagerequiredtenancy_enum.WorkspaceImageRequiredTenancyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiredTenancy' }})
    state: Optional[workspaceimagestate_enum.WorkspaceImageStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
