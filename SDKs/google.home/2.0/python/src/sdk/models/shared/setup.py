from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import stats


@dataclass_json
@dataclass
class Setup:
    qr_ssid_suffix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qr_ssid_suffix' }})
    setup_state: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setup_state' }})
    ssid_suffix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssid_suffix' }})
    stats: stats.Stats = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    tos_accepted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tos_accepted' }})
    
