from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servicepipeline
from . import servicestatus_enum


@dataclass_json
@dataclass
class Service:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_modified_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pipeline: Optional[servicepipeline.ServicePipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline' }})
    repository_connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryConnectionArn' }})
    repository_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryId' }})
    spec: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: servicestatus_enum.ServiceStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
