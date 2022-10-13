from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SoftwareVersionData:
    build_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_dracoon_cloud: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDracoonCloud' }})
    rest_api_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restApiVersion' }})
    scm_revision_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scmRevisionNumber' }})
    sds_server_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdsServerVersion' }})
    
