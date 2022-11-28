from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestIdentityProviderRequest:
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    server_protocol: Optional[ProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProtocol') }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIp') }})
    user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPassword') }})
    
