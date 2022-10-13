from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Stats:
    num_check_connectivity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_check_connectivity' }})
    num_connect_wifi: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_connect_wifi' }})
    num_connected_wifi_not_saved: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_connected_wifi_not_saved' }})
    num_initial_eureka_info: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_initial_eureka_info' }})
    num_obtain_ip: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_obtain_ip' }})
    
