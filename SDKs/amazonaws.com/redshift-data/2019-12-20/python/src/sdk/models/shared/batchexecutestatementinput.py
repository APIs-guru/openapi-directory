from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchExecuteStatementInput:
    cluster_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    sqls: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sqls') }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretArn') }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementName') }})
    with_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WithEvent') }})
    
