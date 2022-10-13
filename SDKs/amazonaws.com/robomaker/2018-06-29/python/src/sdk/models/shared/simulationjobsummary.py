from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import simulationjobstatus_enum


@dataclass_json
@dataclass
class SimulationJobSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    data_source_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceNames' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    robot_application_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotApplicationNames' }})
    simulation_application_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationApplicationNames' }})
    status: Optional[simulationjobstatus_enum.SimulationJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
