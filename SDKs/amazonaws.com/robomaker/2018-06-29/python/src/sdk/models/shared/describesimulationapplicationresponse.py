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
class DescribeSimulationApplicationResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    environment: Optional[Environment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rendering_engine: Optional[RenderingEngine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingEngine') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    robot_software_suite: Optional[RobotSoftwareSuite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotSoftwareSuite') }})
    simulation_software_suite: Optional[SimulationSoftwareSuite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationSoftwareSuite') }})
    sources: Optional[List[Source]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
