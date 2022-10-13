from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import breadcrumb
from . import item
from . import item
from . import item
from . import item
from . import item


@dataclass_json
@dataclass
class CreateMessage:
    application: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    breadcrumbs: Optional[List[breadcrumb.Breadcrumb]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breadcrumbs' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    cookies: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    correlation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correlationId' }})
    data: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    form: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    query_string: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    server_variables: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverVariables' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleTemplate' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
