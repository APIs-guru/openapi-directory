from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trackinginfo


@dataclass_json
@dataclass
class InfoFromBuyer:
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    return_shipment_tracking: Optional[List[trackinginfo.TrackingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShipmentTracking' }})
    
