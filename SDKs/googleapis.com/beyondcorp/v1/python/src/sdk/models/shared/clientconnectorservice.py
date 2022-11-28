from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ClientConnectorServiceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    RUNNING = "RUNNING"
    DOWN = "DOWN"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ClientConnectorService:
    r"""ClientConnectorService
    Message describing ClientConnectorService object.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    egress: Optional[Egress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egress') }})
    ingress: Optional[Ingress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingress') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[ClientConnectorServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class ClientConnectorServiceInput:
    r"""ClientConnectorServiceInput
    Message describing ClientConnectorService object.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    egress: Optional[Egress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egress') }})
    ingress: Optional[Ingress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingress') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
