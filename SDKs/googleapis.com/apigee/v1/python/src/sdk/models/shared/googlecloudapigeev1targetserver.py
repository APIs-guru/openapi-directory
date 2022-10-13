from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1tlsinfo

class GoogleCloudApigeeV1TargetServerProtocolEnum(str, Enum):
    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    HTTP = "HTTP"
    GRPC = "GRPC"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TargetServer:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[GoogleCloudApigeeV1TargetServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    s_sl_info: Optional[googlecloudapigeev1tlsinfo.GoogleCloudApigeeV1TLSInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sSLInfo' }})
    
