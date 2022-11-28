from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class APICoreDtoDatapointsDatapointStatusEnum(str, Enum):
    ACTIVE = "Active"
    PAUSED = "Paused"
    ABUSE = "Abuse"
    DELETED = "Deleted"

class APICoreDtoDatapointsDatapointTypeEnum(str, Enum):
    TRACKING_LINK = "TrackingLink"
    TRACKING_PIXEL = "TrackingPixel"


@dataclass_json
@dataclass
class APICoreDtoDatapointsDatapoint:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    encode_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodeIp') }})
    fifth_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fifthConversionId') }})
    fifth_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fifthConversionName') }})
    first_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstConversionId') }})
    first_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstConversionName') }})
    fourth_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fourthConversionId') }})
    fourth_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fourthConversionName') }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublic') }})
    is_secured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSecured') }})
    light_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lightTracking') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred') }})
    redirect_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectOnly') }})
    second_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondConversionId') }})
    second_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondConversionName') }})
    status: Optional[APICoreDtoDatapointsDatapointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[APICoreDtoTagsTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    third_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdConversionId') }})
    third_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdConversionName') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    tracking_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingCode') }})
    type: Optional[APICoreDtoDatapointsDatapointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    type_tl: Optional[APICoreDtoDatapointsTrackingLinkSpecifics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeTL') }})
    type_tp: Optional[APICoreDtoDatapointsTrackingPixelSpecifics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeTP') }})
    write_permited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writePermited') }})
    
