from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeneralSettingsInfo:
    crypto_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoEnabled' }})
    email_notification_button_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailNotificationButtonEnabled' }})
    eula_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eulaEnabled' }})
    home_room_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomParentId' }})
    home_rooms_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomsActive' }})
    media_server_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaServerEnabled' }})
    s3_tags_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3TagsEnabled' }})
    share_password_sms_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharePasswordSmsEnabled' }})
    use_s3_storage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useS3Storage' }})
    weak_password_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weakPasswordEnabled' }})
    
