from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_tags_tag

class APICoreDtoClickStreamHitDatapointInfoStatusEnum(str, Enum):
    ACTIVE = "Active"
    PAUSED = "Paused"
    ABUSE = "Abuse"
    DELETED = "Deleted"


@dataclass_json
@dataclass
class APICoreDtoClickStreamHitDatapointInfo:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    datapoint_favourite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointFavourite' }})
    datapoint_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointId' }})
    datapoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointName' }})
    datapoint_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointTitle' }})
    datapoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointType' }})
    destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationUrl' }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    is_ab_test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isABTest' }})
    is_private_shared: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrivateShared' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublic' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    status: Optional[APICoreDtoClickStreamHitDatapointInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[api_core_dto_tags_tag.APICoreDtoTagsTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tracking_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingCode' }})
    
