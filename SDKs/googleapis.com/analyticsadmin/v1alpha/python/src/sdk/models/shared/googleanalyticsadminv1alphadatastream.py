from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaDataStreamTypeEnum(str, Enum):
    DATA_STREAM_TYPE_UNSPECIFIED = "DATA_STREAM_TYPE_UNSPECIFIED"
    WEB_DATA_STREAM = "WEB_DATA_STREAM"
    ANDROID_APP_DATA_STREAM = "ANDROID_APP_DATA_STREAM"
    IOS_APP_DATA_STREAM = "IOS_APP_DATA_STREAM"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStreamInput:
    r"""GoogleAnalyticsAdminV1alphaDataStreamInput
    A resource message representing a data stream.
    """
    
    android_app_stream_data: Optional[GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidAppStreamData') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    ios_app_stream_data: Optional[GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppStreamData') }})
    type: Optional[GoogleAnalyticsAdminV1alphaDataStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    web_stream_data: Optional[GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webStreamData') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataStream:
    r"""GoogleAnalyticsAdminV1alphaDataStream
    A resource message representing a data stream.
    """
    
    android_app_stream_data: Optional[GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidAppStreamData') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    ios_app_stream_data: Optional[GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppStreamData') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleAnalyticsAdminV1alphaDataStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    web_stream_data: Optional[GoogleAnalyticsAdminV1alphaDataStreamWebStreamData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webStreamData') }})
    
