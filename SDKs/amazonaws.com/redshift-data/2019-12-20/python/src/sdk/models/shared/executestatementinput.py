from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sqlparameter


@dataclass_json
@dataclass
class ExecuteStatementInput:
    cluster_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    parameters: Optional[List[sqlparameter.SQLParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretArn' }})
    sql: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sql' }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementName' }})
    with_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WithEvent' }})
    
