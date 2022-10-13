from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviousAssetPurchase:
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_id' }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_type' }})
    date_purchased: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_purchased', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_uri' }})
    file_size_in_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_size_in_bytes' }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_model' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    purchased_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchased_by' }})
    size_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_name' }})
    thumb_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb_uri' }})
    
