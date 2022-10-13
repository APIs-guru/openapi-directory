from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FirehoseLogDeliveryDescription:
    delivery_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryStream' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
