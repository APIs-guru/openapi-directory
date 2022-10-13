from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import shipmentstate_enum


@dataclass_json
@dataclass
class UpdateJobShipmentStateRequest:
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    shipment_state: shipmentstate_enum.ShipmentStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShipmentState' }})
    
