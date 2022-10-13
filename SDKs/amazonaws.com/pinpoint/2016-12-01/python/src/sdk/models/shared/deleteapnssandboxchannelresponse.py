from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import apnssandboxchannelresponse


@dataclass_json
@dataclass
class DeleteApnsSandboxChannelResponse:
    apns_sandbox_channel_response: apnssandboxchannelresponse.ApnsSandboxChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSSandboxChannelResponse' }})
    
