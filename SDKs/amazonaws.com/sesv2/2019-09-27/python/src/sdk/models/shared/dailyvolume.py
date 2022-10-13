from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainispplacement
from . import volumestatistics


@dataclass_json
@dataclass
class DailyVolume:
    domain_isp_placements: Optional[List[domainispplacement.DomainIspPlacement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainIspPlacements' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    volume_statistics: Optional[volumestatistics.VolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeStatistics' }})
    
