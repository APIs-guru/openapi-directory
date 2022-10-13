from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensions
from . import downloaddetails
from . import user


@dataclass_json
@dataclass
class HistoricalDownload:
    agreement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agreement_name' }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_type' }})
    date_downloaded: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_downloaded', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimensions: Optional[dimensions.Dimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    download_details: Optional[downloaddetails.DownloadDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_details' }})
    download_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_source' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    product_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_id' }})
    product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_type' }})
    size_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_name' }})
    thumb_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb_uri' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
