from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asset
from . import links
from . import boardpermissions


@dataclass_json
@dataclass
class BoardDetail:
    asset_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_count' }})
    assets: Optional[List[asset.Asset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    comment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment_count' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permissions: Optional[boardpermissions.BoardPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
