from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class APICoreDtoClickStreamHitDatapointInfoStatusEnum(str, Enum):
    ACTIVE = "Active"
    PAUSED = "Paused"
    ABUSE = "Abuse"
    DELETED = "Deleted"


@dataclass_json
@dataclass
class APICoreDtoClickStreamHitDatapointInfo:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    datapoint_favourite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointFavourite') }})
    datapoint_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointId') }})
    datapoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointName') }})
    datapoint_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointTitle') }})
    datapoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointType') }})
    destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUrl') }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    is_ab_test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isABTest') }})
    is_private_shared: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrivateShared') }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublic') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    status: Optional[APICoreDtoClickStreamHitDatapointInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[APICoreDtoTagsTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tracking_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingCode') }})
    
