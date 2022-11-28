from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeProjectResponse:
    portal_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalId') }})
    project_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    project_creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    project_last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectDescription') }})
    
