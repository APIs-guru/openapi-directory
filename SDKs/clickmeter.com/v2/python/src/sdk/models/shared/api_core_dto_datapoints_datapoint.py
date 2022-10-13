from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_tags_tag
from . import api_core_dto_datapoints_trackinglinkspecifics
from . import api_core_dto_datapoints_trackingpixelspecifics

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
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    encode_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodeIp' }})
    fifth_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fifthConversionId' }})
    fifth_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fifthConversionName' }})
    first_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstConversionId' }})
    first_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstConversionName' }})
    fourth_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fourthConversionId' }})
    fourth_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fourthConversionName' }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublic' }})
    is_secured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSecured' }})
    light_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lightTracking' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred' }})
    redirect_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectOnly' }})
    second_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondConversionId' }})
    second_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondConversionName' }})
    status: Optional[APICoreDtoDatapointsDatapointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[api_core_dto_tags_tag.APICoreDtoTagsTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    third_conversion_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdConversionId' }})
    third_conversion_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdConversionName' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    tracking_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingCode' }})
    type: Optional[APICoreDtoDatapointsDatapointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    type_tl: Optional[api_core_dto_datapoints_trackinglinkspecifics.APICoreDtoDatapointsTrackingLinkSpecifics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeTL' }})
    type_tp: Optional[api_core_dto_datapoints_trackingpixelspecifics.APICoreDtoDatapointsTrackingPixelSpecifics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeTP' }})
    write_permited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writePermited' }})
    
