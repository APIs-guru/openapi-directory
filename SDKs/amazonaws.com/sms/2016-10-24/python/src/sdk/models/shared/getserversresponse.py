from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import servercatalogstatus_enum
from . import server


@dataclass_json
@dataclass
class GetServersResponse:
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    server_catalog_status: Optional[servercatalogstatus_enum.ServerCatalogStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCatalogStatus' }})
    server_list: Optional[List[server.Server]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverList' }})
    
