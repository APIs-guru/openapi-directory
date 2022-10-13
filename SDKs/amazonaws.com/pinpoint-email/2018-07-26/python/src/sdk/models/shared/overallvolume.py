from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainispplacement
from . import volumestatistics


@dataclass_json
@dataclass
class OverallVolume:
    domain_isp_placements: Optional[List[domainispplacement.DomainIspPlacement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainIspPlacements' }})
    read_rate_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadRatePercent' }})
    volume_statistics: Optional[volumestatistics.VolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeStatistics' }})
    
