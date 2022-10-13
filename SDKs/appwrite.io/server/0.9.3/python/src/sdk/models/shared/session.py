from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Session:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    client_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCode' }})
    client_engine: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientEngine' }})
    client_engine_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientEngineVersion' }})
    client_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    client_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientType' }})
    client_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientVersion' }})
    country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    country_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryName' }})
    current: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    device_brand: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceBrand' }})
    device_model: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceModel' }})
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    expire: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    os_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osCode' }})
    os_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osName' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    provider_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerToken' }})
    provider_uid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerUid' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
