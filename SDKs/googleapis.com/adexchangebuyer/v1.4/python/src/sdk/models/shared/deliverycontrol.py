from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliverycontrolfrequencycap


@dataclass_json
@dataclass
class DeliveryControl:
    creative_blocking_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeBlockingLevel' }})
    delivery_rate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryRateType' }})
    frequency_caps: Optional[List[deliverycontrolfrequencycap.DeliveryControlFrequencyCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyCaps' }})
    
