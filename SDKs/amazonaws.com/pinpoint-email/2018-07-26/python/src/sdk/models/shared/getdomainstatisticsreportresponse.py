from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDomainStatisticsReportResponse:
    r"""GetDomainStatisticsReportResponse
    An object that includes statistics that are related to the domain that you specified.
    """
    
    daily_volumes: List[DailyVolume] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyVolumes') }})
    overall_volume: OverallVolume = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallVolume') }})
    
