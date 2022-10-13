from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Log:
    client_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCode' }})
    client_engine: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientEngine' }})
    client_engine_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientEngineVersion' }})
    client_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    client_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientType' }})
    client_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientVersion' }})
    country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    country_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryName' }})
    device_brand: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceBrand' }})
    device_model: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceModel' }})
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    event: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    os_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osCode' }})
    os_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osName' }})
    os_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
