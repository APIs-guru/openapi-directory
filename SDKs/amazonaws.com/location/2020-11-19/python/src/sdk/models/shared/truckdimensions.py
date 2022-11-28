from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TruckDimensions:
    r"""TruckDimensions
    Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>.
    """
    
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Length') }})
    unit: Optional[DimensionUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    
