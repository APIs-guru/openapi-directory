from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConnectionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"

class ConnectionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TCP_PROXY = "TCP_PROXY"


@dataclass_json
@dataclass
class ConnectionInput:
    r"""ConnectionInput
    A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
    """
    
    application_endpoint: Optional[ApplicationEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationEndpoint') }})
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectors') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway: Optional[GatewayInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Connection:
    r"""Connection
    A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
    """
    
    application_endpoint: Optional[ApplicationEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationEndpoint') }})
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectors') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway: Optional[Gateway] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
