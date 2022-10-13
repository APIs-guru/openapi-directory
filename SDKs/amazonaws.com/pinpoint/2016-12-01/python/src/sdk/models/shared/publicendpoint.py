from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import channeltype_enum
from . import endpointdemographic
from . import endpointlocation
from . import endpointuser


@dataclass_json
@dataclass
class PublicEndpoint:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    attributes: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    channel_type: Optional[channeltype_enum.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelType' }})
    demographic: Optional[endpointdemographic.EndpointDemographic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Demographic' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate' }})
    endpoint_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointStatus' }})
    location: Optional[endpointlocation.EndpointLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    opt_out: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptOut' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestId' }})
    user: Optional[endpointuser.EndpointUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
