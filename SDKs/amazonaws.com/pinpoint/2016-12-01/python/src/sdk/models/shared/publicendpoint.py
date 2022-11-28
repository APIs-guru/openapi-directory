from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublicEndpoint:
    r"""PublicEndpoint
    Specifies the properties and attributes of an endpoint that's associated with an event.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    attributes: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    channel_type: Optional[ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelType') }})
    demographic: Optional[EndpointDemographic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Demographic') }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate') }})
    endpoint_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointStatus') }})
    location: Optional[EndpointLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    opt_out: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptOut') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    user: Optional[EndpointUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
