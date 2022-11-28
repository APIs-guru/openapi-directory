from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityActor:
    r"""ActivityActor
    User doing the action.
    """
    
    caller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerType') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    

@dataclass_json
@dataclass
class ActivityEventsParametersMessageValue:
    r"""ActivityEventsParametersMessageValue
    Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
    """
    
    parameter: Optional[List[NestedParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    

@dataclass_json
@dataclass
class ActivityEventsParametersMultiMessageValue:
    parameter: Optional[List[NestedParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    

@dataclass_json
@dataclass
class ActivityEventsParameters:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    message_value: Optional[ActivityEventsParametersMessageValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageValue') }})
    multi_int_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiIntValue') }})
    multi_message_value: Optional[List[ActivityEventsParametersMultiMessageValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiMessageValue') }})
    multi_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ActivityEvents:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[List[ActivityEventsParameters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ActivityID:
    r"""ActivityID
    Unique identifier for each activity record.
    """
    
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    unique_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueQualifier') }})
    

@dataclass_json
@dataclass
class Activity:
    r"""Activity
    JSON template for the activity resource.
    """
    
    actor: Optional[ActivityActor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    events: Optional[List[ActivityEvents]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    id: Optional[ActivityID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    owner_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerDomain') }})
    
