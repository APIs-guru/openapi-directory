from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"

class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TCP_PROXY = "TCP_PROXY"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput:
    r"""GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput
    A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
    """
    
    application_endpoint: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationEndpoint') }})
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectors') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection:
    r"""GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection
    A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
    """
    
    application_endpoint: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationEndpoint') }})
    connectors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectors') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gateway: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
