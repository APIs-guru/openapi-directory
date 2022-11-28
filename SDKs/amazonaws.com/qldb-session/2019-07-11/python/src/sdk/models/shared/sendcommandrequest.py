from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendCommandRequest:
    abort_transaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbortTransaction') }})
    commit_transaction: Optional[CommitTransactionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitTransaction') }})
    end_session: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndSession') }})
    execute_statement: Optional[ExecuteStatementRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteStatement') }})
    fetch_page: Optional[FetchPageRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FetchPage') }})
    session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionToken') }})
    start_session: Optional[StartSessionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartSession') }})
    start_transaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTransaction') }})
    
