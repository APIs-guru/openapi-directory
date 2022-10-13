from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Database:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    table_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableCount' }})
    
