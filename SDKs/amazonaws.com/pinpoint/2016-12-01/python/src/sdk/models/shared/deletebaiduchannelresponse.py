from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import baiduchannelresponse


@dataclass_json
@dataclass
class DeleteBaiduChannelResponse:
    baidu_channel_response: baiduchannelresponse.BaiduChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaiduChannelResponse' }})
    
