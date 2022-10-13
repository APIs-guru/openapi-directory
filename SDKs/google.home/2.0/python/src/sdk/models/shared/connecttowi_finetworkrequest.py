from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnecttoWiFiNetworkRequest:
    bssid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bssid' }})
    enc_passwd: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enc_passwd' }})
    signal_level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signal_level' }})
    ssid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssid' }})
    wpa_auth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_auth' }})
    wpa_cipher: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_cipher' }})
    
