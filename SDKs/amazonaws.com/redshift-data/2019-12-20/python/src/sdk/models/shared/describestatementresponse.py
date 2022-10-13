from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sqlparameter
from . import statusstring_enum
from . import substatementdata


@dataclass_json
@dataclass
class DescribeStatementResponse:
    cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    has_result_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasResultSet' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    query_parameters: Optional[List[sqlparameter.SQLParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryParameters' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryString' }})
    redshift_pid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftPid' }})
    redshift_query_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftQueryId' }})
    result_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultRows' }})
    result_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultSize' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretArn' }})
    status: Optional[statusstring_enum.StatusStringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sub_statements: Optional[List[substatementdata.SubStatementData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubStatements' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
