from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TruckWeight:
    r"""TruckWeight
    Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>.
    """
    
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    unit: Optional[VehicleWeightUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
