from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceAccessDetails:
    r"""InstanceAccessDetails
    The parameters for gaining temporary access to one of your Amazon Lightsail instances.
    """
    
    cert_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certKey') }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    host_keys: Optional[List[HostKeyAttributes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostKeys') }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_data: Optional[PasswordData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordData') }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    protocol: Optional[InstanceAccessProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
