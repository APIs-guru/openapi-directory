from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserCipherUseEntityInterfaceEnum(str, Enum):
    WEB = "web"
    FTP = "ftp"
    SFTP = "sftp"
    DAV = "dav"
    DESKTOP = "desktop"
    RESTAPI = "restapi"
    ROBOT = "robot"
    JSAPI = "jsapi"


@dataclass_json
@dataclass
class UserCipherUseEntity:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface: Optional[UserCipherUseEntityInterfaceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    protocol_cipher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol_cipher' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
