from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Leg:
    r"""Leg
    <p>Contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href=\"https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road\">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul>
    """
    
    distance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distance') }})
    duration_seconds: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationSeconds') }})
    end_position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndPosition') }})
    start_position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPosition') }})
    steps: List[Step] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    geometry: Optional[LegGeometry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    
