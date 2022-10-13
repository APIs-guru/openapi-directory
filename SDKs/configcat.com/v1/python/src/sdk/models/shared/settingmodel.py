from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import settingtype_enum
from . import tagmodel


@dataclass_json
@dataclass
class SettingModel:
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configName' }})
    expiration_warning_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationWarningAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hint' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerUserEmail' }})
    owner_user_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerUserFullName' }})
    setting_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingId' }})
    setting_type: Optional[settingtype_enum.SettingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingType' }})
    tags: Optional[List[tagmodel.TagModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
