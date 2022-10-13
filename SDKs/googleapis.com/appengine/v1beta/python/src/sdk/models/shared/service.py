from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networksettings
from . import trafficsplit


@dataclass_json
@dataclass
class Service:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_settings: Optional[networksettings.NetworkSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkSettings' }})
    split: Optional[trafficsplit.TrafficSplit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'split' }})
    
