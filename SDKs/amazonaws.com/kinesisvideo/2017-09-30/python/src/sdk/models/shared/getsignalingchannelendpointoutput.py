from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceendpointlistitem


@dataclass_json
@dataclass
class GetSignalingChannelEndpointOutput:
    resource_endpoint_list: Optional[List[resourceendpointlistitem.ResourceEndpointListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceEndpointList' }})
    
