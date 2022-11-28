from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRealtimeEndpointOutput:
    r"""CreateRealtimeEndpointOutput
    <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p>
    """
    
    ml_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    realtime_endpoint_info: Optional[RealtimeEndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RealtimeEndpointInfo') }})
    
