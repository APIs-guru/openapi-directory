from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import robotsoftwaresuite
from . import simulationsoftwaresuite


@dataclass_json
@dataclass
class SimulationApplicationSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    robot_software_suite: Optional[robotsoftwaresuite.RobotSoftwareSuite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotSoftwareSuite' }})
    simulation_software_suite: Optional[simulationsoftwaresuite.SimulationSoftwareSuite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationSoftwareSuite' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
