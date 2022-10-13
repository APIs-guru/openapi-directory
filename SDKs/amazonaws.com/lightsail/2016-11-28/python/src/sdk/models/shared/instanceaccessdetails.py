from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hostkeyattributes
from . import passworddata
from . import instanceaccessprotocol_enum


@dataclass_json
@dataclass
class InstanceAccessDetails:
    cert_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certKey' }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    host_keys: Optional[List[hostkeyattributes.HostKeyAttributes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostKeys' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    password_data: Optional[passworddata.PasswordData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordData' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    protocol: Optional[instanceaccessprotocol_enum.InstanceAccessProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
