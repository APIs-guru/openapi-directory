from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CalculateRouteResponse:
    r"""CalculateRouteResponse
    Returns the result of the route calculation. Metadata includes legs and route summary.
    """
    
    legs: List[Leg] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Legs') }})
    summary: CalculateRouteSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
