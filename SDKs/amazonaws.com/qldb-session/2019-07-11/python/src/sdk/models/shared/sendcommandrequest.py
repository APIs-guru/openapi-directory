from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import committransactionrequest
from . import executestatementrequest
from . import fetchpagerequest
from . import startsessionrequest


@dataclass_json
@dataclass
class SendCommandRequest:
    abort_transaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbortTransaction' }})
    commit_transaction: Optional[committransactionrequest.CommitTransactionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommitTransaction' }})
    end_session: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndSession' }})
    execute_statement: Optional[executestatementrequest.ExecuteStatementRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecuteStatement' }})
    fetch_page: Optional[fetchpagerequest.FetchPageRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FetchPage' }})
    session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionToken' }})
    start_session: Optional[startsessionrequest.StartSessionRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartSession' }})
    start_transaction: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTransaction' }})
    
