from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeDashboardResponse:
    dashboard_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardArn') }})
    dashboard_creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dashboard_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardDefinition') }})
    dashboard_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardId') }})
    dashboard_last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dashboard_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardName') }})
    project_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    dashboard_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardDescription') }})
    
