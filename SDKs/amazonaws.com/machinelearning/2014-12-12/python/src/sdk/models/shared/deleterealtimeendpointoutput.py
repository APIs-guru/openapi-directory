from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import realtimeendpointinfo


@dataclass_json
@dataclass
class DeleteRealtimeEndpointOutput:
    ml_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    realtime_endpoint_info: Optional[realtimeendpointinfo.RealtimeEndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RealtimeEndpointInfo' }})
    
