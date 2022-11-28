from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DailyVolume:
    r"""DailyVolume
    An object that contains information about the volume of email sent on each day of the analysis period.
    """
    
    domain_isp_placements: Optional[List[DomainIspPlacement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainIspPlacements') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    volume_statistics: Optional[VolumeStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeStatistics') }})
    
