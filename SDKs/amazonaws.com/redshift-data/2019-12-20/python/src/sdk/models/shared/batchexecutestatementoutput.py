from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchExecuteStatementOutput:
    cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretArn' }})
    
