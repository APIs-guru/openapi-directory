from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttackVolume:
    r"""AttackVolume
    Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.
    """
    
    bits_per_second: Optional[AttackVolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BitsPerSecond') }})
    packets_per_second: Optional[AttackVolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PacketsPerSecond') }})
    requests_per_second: Optional[AttackVolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestsPerSecond') }})
    
