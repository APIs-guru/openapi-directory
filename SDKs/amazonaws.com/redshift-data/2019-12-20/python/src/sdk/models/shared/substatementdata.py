from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import statementstatusstring_enum


@dataclass_json
@dataclass
class SubStatementData:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    has_result_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasResultSet' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryString' }})
    redshift_query_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftQueryId' }})
    result_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultRows' }})
    result_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultSize' }})
    status: Optional[statementstatusstring_enum.StatementStatusStringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
