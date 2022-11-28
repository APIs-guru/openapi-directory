from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AppGatewayHostTypeEnum(str, Enum):
    HOST_TYPE_UNSPECIFIED = "HOST_TYPE_UNSPECIFIED"
    GCP_REGIONAL_MIG = "GCP_REGIONAL_MIG"

class AppGatewayStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DOWN = "DOWN"

class AppGatewayTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TCP_PROXY = "TCP_PROXY"


@dataclass_json
@dataclass
class AppGateway:
    r"""AppGateway
    A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
    """
    
    allocated_connections: Optional[List[AllocatedConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocatedConnections') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    host_type: Optional[AppGatewayHostTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[AppGatewayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[AppGatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class AppGatewayInput:
    r"""AppGatewayInput
    A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    host_type: Optional[AppGatewayHostTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[AppGatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
