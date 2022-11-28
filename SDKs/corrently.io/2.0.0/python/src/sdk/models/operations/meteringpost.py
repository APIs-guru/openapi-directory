from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MeteringPostRequestBody:
    one_8_0: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1.8.0') }})
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    energy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energy') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclass_json
@dataclass
class MeteringPost200ApplicationJSON:
    one_8_0: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1.8.0') }})
    one_8_1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1.8.1') }})
    one_8_2: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1.8.2') }})
    processing_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_processingTime') }})
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    co2_g_oekostrom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co2_g_oekostrom') }})
    co2_g_standard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co2_g_standard') }})
    time_stamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeStamp') }})
    

@dataclass
class MeteringPostRequest:
    request: MeteringPostRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MeteringPostResponse:
    content_type: str = field()
    status_code: int = field()
    metering_post_200_application_json_object: Optional[MeteringPost200ApplicationJSON] = field(default=None)
    
