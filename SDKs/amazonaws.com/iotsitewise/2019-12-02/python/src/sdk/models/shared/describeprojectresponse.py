from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeProjectResponse:
    portal_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalId' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    project_creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectDescription' }})
    project_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    project_last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectLastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    
