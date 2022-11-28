from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnecttoWiFiNetworkRequest:
    bssid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bssid') }})
    enc_passwd: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enc_passwd') }})
    signal_level: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signal_level') }})
    ssid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    wpa_auth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_auth') }})
    wpa_cipher: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_cipher') }})
    
