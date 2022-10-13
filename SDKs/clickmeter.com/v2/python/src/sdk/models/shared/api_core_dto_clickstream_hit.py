from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_clickstream_hitbrowserinfo
from . import api_core_dto_clickstream_hitconversioninfo
from . import api_core_dto_clickstream_hitconversioninfo
from . import api_core_dto_clickstream_hitconversioninfo
from . import api_core_dto_clickstream_hitconversioninfo
from . import api_core_dto_clickstream_hitconversioninfo
from . import api_core_dto_clickstream_hitconversioninfo
from . import api_core_dto_clickstream_hitdatapointinfo
from . import api_core_dto_clickstream_hitlocationinfo
from . import api_core_dto_clickstream_hitosinfo
from . import api_core_dto_clickstream_hitsource


@dataclass_json
@dataclass
class APICoreDtoClickStreamHit:
    access_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTime' }})
    browser: Optional[api_core_dto_clickstream_hitbrowserinfo.APICoreDtoClickStreamHitBrowserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browser' }})
    client_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientLanguage' }})
    conversion1: Optional[api_core_dto_clickstream_hitconversioninfo.APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion1' }})
    conversion2: Optional[api_core_dto_clickstream_hitconversioninfo.APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion2' }})
    conversion3: Optional[api_core_dto_clickstream_hitconversioninfo.APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion3' }})
    conversion4: Optional[api_core_dto_clickstream_hitconversioninfo.APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion4' }})
    conversion5: Optional[api_core_dto_clickstream_hitconversioninfo.APICoreDtoClickStreamHitConversionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion5' }})
    conversions: Optional[List[api_core_dto_clickstream_hitconversioninfo.APICoreDtoClickStreamHitConversionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversions' }})
    entity: Optional[api_core_dto_clickstream_hitdatapointinfo.APICoreDtoClickStreamHitDatapointInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    is_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProxy' }})
    is_spider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSpider' }})
    is_unique: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUnique' }})
    location: Optional[api_core_dto_clickstream_hitlocationinfo.APICoreDtoClickStreamHitLocationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org' }})
    os: Optional[api_core_dto_clickstream_hitosinfo.APICoreDtoClickStreamHitOsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    query_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    real_destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realDestinationUrl' }})
    referer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referer' }})
    source: Optional[api_core_dto_clickstream_hitsource.APICoreDtoClickStreamHitSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
