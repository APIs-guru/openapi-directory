from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import usercontext
from . import contextsource


@dataclass_json
@dataclass
class DescribeContextResponse:
    context_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextArn' }})
    context_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextName' }})
    context_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextType' }})
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    source: Optional[contextsource.ContextSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
