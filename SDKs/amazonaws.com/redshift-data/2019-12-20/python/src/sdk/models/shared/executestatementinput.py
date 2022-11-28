from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteStatementInput:
    cluster_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    sql: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sql') }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    parameters: Optional[List[SQLParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretArn') }})
    statement_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementName') }})
    with_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WithEvent') }})
    
