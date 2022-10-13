from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ForgetWiFiNetworkRequest:
    wpa_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_id' }})
    
