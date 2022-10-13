from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import namespaceproperties
from . import namespacetype_enum


@dataclass_json
@dataclass
class NamespaceSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    properties: Optional[namespaceproperties.NamespaceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    service_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCount' }})
    type: Optional[namespacetype_enum.NamespaceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
