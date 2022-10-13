from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nestedparameter
from . import nestedparameter


@dataclass_json
@dataclass
class ActivityActor:
    caller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callerType' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    

@dataclass_json
@dataclass
class ActivityEventsParametersMessageValue:
    parameter: Optional[List[nestedparameter.NestedParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    

@dataclass_json
@dataclass
class ActivityEventsParametersMultiMessageValue:
    parameter: Optional[List[nestedparameter.NestedParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    

@dataclass_json
@dataclass
class ActivityEventsParameters:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    message_value: Optional[ActivityEventsParametersMessageValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageValue' }})
    multi_int_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiIntValue' }})
    multi_message_value: Optional[List[ActivityEventsParametersMultiMessageValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiMessageValue' }})
    multi_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ActivityEvents:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: Optional[List[ActivityEventsParameters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ActivityID:
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    unique_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueQualifier' }})
    

@dataclass_json
@dataclass
class Activity:
    actor: Optional[ActivityActor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    events: Optional[List[ActivityEvents]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    id: Optional[ActivityID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    owner_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerDomain' }})
    
