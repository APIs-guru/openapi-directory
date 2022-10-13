from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import admchannelresponse


@dataclass_json
@dataclass
class GetAdmChannelResponse:
    adm_channel_response: admchannelresponse.AdmChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ADMChannelResponse' }})
    
