from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentversion
from . import devicestats
from . import edgemodelstat
from . import edgeoutputconfig


@dataclass_json
@dataclass
class GetDeviceFleetReportResponse:
    agent_versions: Optional[List[agentversion.AgentVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentVersions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_fleet_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetArn' }})
    device_fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    device_stats: Optional[devicestats.DeviceStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceStats' }})
    model_stats: Optional[List[edgemodelstat.EdgeModelStat]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelStats' }})
    output_config: Optional[edgeoutputconfig.EdgeOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    report_generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportGenerated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
