from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"

class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TCP_PROXY = "TCP_PROXY"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1AppConnection:
    r"""GoogleCloudBeyondcorpAppconnectionsV1AppConnection
    A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
    """
    
    application_endpoint: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationEndpoint') }})
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectors') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput:
    r"""GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput
    A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
    """
    
    application_endpoint: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationEndpoint') }})
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectors') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
