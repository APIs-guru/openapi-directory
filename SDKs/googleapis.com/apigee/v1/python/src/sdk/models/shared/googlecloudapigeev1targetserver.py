from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudApigeeV1TargetServerProtocolEnum(str, Enum):
    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    HTTP = "HTTP"
    GRPC = "GRPC"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TargetServer:
    r"""GoogleCloudApigeeV1TargetServer
    TargetServer configuration. TargetServers are used to decouple a proxy's TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[GoogleCloudApigeeV1TargetServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    s_sl_info: Optional[GoogleCloudApigeeV1TLSInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sSLInfo') }})
    
