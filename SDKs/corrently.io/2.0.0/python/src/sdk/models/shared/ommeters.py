from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ommeters:
    current_scaling_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentScalingFactor' }})
    load_profile_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadProfileType' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    manufacturer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturerId' }})
    measurement_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementType' }})
    meta: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    meter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meterId' }})
    scaling_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scalingFactor' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    voltage_scaling_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voltageScalingFactor' }})
    
