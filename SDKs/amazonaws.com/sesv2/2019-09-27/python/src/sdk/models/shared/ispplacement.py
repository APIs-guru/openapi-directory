from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IspPlacement:
    r"""IspPlacement
    An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
    """
    
    isp_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IspName') }})
    placement_statistics: Optional[PlacementStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementStatistics') }})
    
