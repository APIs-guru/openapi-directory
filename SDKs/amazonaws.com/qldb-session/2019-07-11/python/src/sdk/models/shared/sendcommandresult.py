from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendCommandResult:
    abort_transaction: Optional[AbortTransactionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbortTransaction') }})
    commit_transaction: Optional[CommitTransactionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitTransaction') }})
    end_session: Optional[EndSessionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndSession') }})
    execute_statement: Optional[ExecuteStatementResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteStatement') }})
    fetch_page: Optional[FetchPageResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FetchPage') }})
    start_session: Optional[StartSessionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartSession') }})
    start_transaction: Optional[StartTransactionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTransaction') }})
    
