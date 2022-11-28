from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APICoreDtoClickStreamHit:
    access_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTime') }})
    browser: Optional[APICoreDtoClickStreamHitBrowserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browser') }})
    client_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientLanguage') }})
    conversion1: Optional[APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion1') }})
    conversion2: Optional[APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion2') }})
    conversion3: Optional[APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion3') }})
    conversion4: Optional[APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion4') }})
    conversion5: Optional[APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion5') }})
    conversions: Optional[List[APICoreDtoClickStreamHitConversionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversions') }})
    entity: Optional[APICoreDtoClickStreamHitDatapointInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    is_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProxy') }})
    is_spider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSpider') }})
    is_unique: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUnique') }})
    location: Optional[APICoreDtoClickStreamHitLocationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    os: Optional[APICoreDtoClickStreamHitOsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    query_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParams') }})
    real_destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realDestinationUrl') }})
    referer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referer') }})
    source: Optional[APICoreDtoClickStreamHitSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
