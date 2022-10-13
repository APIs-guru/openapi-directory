from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sqlparameter
from . import statusstring_enum


@dataclass_json
@dataclass
class StatementData:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_batch_statement: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsBatchStatement' }})
    query_parameters: Optional[List[sqlparameter.SQLParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryParameters' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryString' }})
    query_strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryStrings' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretArn' }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementName' }})
    status: Optional[statusstring_enum.StatusStringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
