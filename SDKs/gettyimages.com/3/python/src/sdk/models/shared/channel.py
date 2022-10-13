from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assetfamily_enum
from . import assettype_enum


@dataclass_json
@dataclass
class Channel:
    asset_change_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssetChangeType' }})
    asset_family: Optional[assetfamily_enum.AssetFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssetFamily' }})
    asset_type: Optional[assettype_enum.AssetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssetType' }})
    channel_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelId' }})
    create_date_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDateUtc', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    notification_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationCount' }})
    oldest_change_notification_date_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OldestChangeNotificationDateUtc', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
