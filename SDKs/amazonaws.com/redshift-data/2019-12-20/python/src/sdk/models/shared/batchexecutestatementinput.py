from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchExecuteStatementInput:
    cluster_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretArn' }})
    sqls: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sqls' }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementName' }})
    with_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WithEvent' }})
    
