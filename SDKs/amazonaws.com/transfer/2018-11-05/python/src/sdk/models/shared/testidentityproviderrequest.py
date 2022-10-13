from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import protocol_enum


@dataclass_json
@dataclass
class TestIdentityProviderRequest:
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    server_protocol: Optional[protocol_enum.ProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerProtocol' }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIp' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPassword' }})
    
