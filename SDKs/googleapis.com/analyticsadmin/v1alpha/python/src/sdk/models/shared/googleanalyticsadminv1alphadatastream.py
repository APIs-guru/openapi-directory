from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphadatastreamandroidappstreamdata
from . import googleanalyticsadminv1alphadatastreamiosappstreamdata
from . import googleanalyticsadminv1alphadatastreamwebstreamdata

class GoogleAnalyticsAdminV1alphaDataStreamTypeEnum(str, Enum):
    DATA_STREAM_TYPE_UNSPECIFIED = "DATA_STREAM_TYPE_UNSPECIFIED"
    WEB_DATA_STREAM = "WEB_DATA_STREAM"
    ANDROID_APP_DATA_STREAM = "ANDROID_APP_DATA_STREAM"
    IOS_APP_DATA_STREAM = "IOS_APP_DATA_STREAM"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStream:
    android_app_stream_data: Optional[googleanalyticsadminv1alphadatastreamandroidappstreamdata.GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidAppStreamData' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    ios_app_stream_data: Optional[googleanalyticsadminv1alphadatastreamiosappstreamdata.GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosAppStreamData' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[GoogleAnalyticsAdminV1alphaDataStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    web_stream_data: Optional[googleanalyticsadminv1alphadatastreamwebstreamdata.GoogleAnalyticsAdminV1alphaDataStreamWebStreamData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webStreamData' }})
    
