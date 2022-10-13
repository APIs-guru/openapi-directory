from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeOrganizationResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    completed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_mail_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultMailDomain' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    directory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryType' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
