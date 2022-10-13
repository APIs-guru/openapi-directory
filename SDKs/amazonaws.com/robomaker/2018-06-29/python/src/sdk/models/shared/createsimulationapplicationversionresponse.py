from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environment
from . import renderingengine
from . import robotsoftwaresuite
from . import simulationsoftwaresuite
from . import source


@dataclass_json
@dataclass
class CreateSimulationApplicationVersionResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    environment: Optional[environment.Environment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rendering_engine: Optional[renderingengine.RenderingEngine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderingEngine' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    robot_software_suite: Optional[robotsoftwaresuite.RobotSoftwareSuite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotSoftwareSuite' }})
    simulation_software_suite: Optional[simulationsoftwaresuite.SimulationSoftwareSuite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationSoftwareSuite' }})
    sources: Optional[List[source.Source]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
