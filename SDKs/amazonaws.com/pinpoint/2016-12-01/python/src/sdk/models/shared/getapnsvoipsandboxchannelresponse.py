from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import apnsvoipsandboxchannelresponse


@dataclass_json
@dataclass
class GetApnsVoipSandboxChannelResponse:
    apns_voip_sandbox_channel_response: apnsvoipsandboxchannelresponse.ApnsVoipSandboxChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSVoipSandboxChannelResponse' }})
    
