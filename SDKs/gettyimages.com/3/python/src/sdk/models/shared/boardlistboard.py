from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asset


@dataclass_json
@dataclass
class BoardListBoard:
    asset_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_count' }})
    board_relationship: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'board_relationship' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hero_asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hero_asset' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
