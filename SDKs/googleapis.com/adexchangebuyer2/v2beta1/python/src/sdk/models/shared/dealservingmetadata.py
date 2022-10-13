from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dealpausestatus


@dataclass_json
@dataclass
class DealServingMetadata:
    deal_pause_status: Optional[dealpausestatus.DealPauseStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealPauseStatus' }})
    
