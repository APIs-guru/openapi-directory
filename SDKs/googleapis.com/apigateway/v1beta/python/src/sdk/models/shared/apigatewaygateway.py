from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApigatewayGatewayStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class ApigatewayGatewayInput:
    r"""ApigatewayGatewayInput
    A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
    """
    
    api_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class ApigatewayGateway:
    r"""ApigatewayGateway
    A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
    """
    
    api_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiConfig') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    default_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHostname') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[ApigatewayGatewayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
