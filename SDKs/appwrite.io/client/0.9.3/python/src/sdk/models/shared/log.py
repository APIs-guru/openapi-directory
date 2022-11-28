from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Log:
    r"""Log
    Log
    """
    
    client_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCode') }})
    client_engine: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientEngine') }})
    client_engine_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientEngineVersion') }})
    client_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    client_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientType') }})
    client_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    country_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryName') }})
    device_brand: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceBrand') }})
    device_model: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceModel') }})
    device_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    event: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    os_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('osCode') }})
    os_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('osName') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
