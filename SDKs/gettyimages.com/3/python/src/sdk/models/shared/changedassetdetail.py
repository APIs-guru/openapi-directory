from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChangedAssetDetail:
    asset_changed_utc_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_changed_utc_datetime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_lifecycle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_lifecycle' }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_type' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
