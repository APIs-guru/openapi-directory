from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import dailyvolume
from . import overallvolume


@dataclass_json
@dataclass
class GetDomainStatisticsReportResponse:
    daily_volumes: List[dailyvolume.DailyVolume] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyVolumes' }})
    overall_volume: overallvolume.OverallVolume = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverallVolume' }})
    
