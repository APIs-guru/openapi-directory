from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""UserCipherUseEntity
    List User Cipher Uses
    """
    
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interface: Optional[UserCipherUseEntityInterfaceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    protocol_cipher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol_cipher') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
