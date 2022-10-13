from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tumblingwindow


@dataclass_json
@dataclass
class MetricWindow:
    tumbling: Optional[tumblingwindow.TumblingWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tumbling' }})
    
