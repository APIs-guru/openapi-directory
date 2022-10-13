from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apptype_enum
from . import appstatus_enum


@dataclass_json
@dataclass
class AppDetails:
    app_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppName' }})
    app_type: Optional[apptype_enum.AppTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    status: Optional[appstatus_enum.AppStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    user_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    
