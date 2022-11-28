from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OverallVolume:
    r"""OverallVolume
    An object that contains information about email that was sent from the selected domain.
    """
    
    domain_isp_placements: Optional[List[DomainIspPlacement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainIspPlacements') }})
    read_rate_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRatePercent') }})
    volume_statistics: Optional[VolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeStatistics') }})
    
