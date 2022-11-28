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
class GetDeviceFleetReportResponse:
    device_fleet_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceFleetArn') }})
    device_fleet_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceFleetName') }})
    agent_versions: Optional[List[AgentVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    device_stats: Optional[DeviceStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceStats') }})
    model_stats: Optional[List[EdgeModelStat]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelStats') }})
    output_config: Optional[EdgeOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    report_generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportGenerated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
