from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeDashboardResponse:
    dashboard_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardArn' }})
    dashboard_creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dashboard_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardDefinition' }})
    dashboard_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardDescription' }})
    dashboard_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardId' }})
    dashboard_last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardLastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dashboard_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardName' }})
    project_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    
