from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Channel:
    asset_change_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssetChangeType') }})
    asset_family: Optional[AssetFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssetFamily') }})
    asset_type: Optional[AssetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssetType') }})
    channel_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelId') }})
    create_date_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDateUtc'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metadata') }})
    notification_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationCount') }})
    oldest_change_notification_date_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OldestChangeNotificationDateUtc'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
