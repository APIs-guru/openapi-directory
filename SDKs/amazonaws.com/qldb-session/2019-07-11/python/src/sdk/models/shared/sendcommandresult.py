from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aborttransactionresult
from . import committransactionresult
from . import endsessionresult
from . import executestatementresult
from . import fetchpageresult
from . import startsessionresult
from . import starttransactionresult


@dataclass_json
@dataclass
class SendCommandResult:
    abort_transaction: Optional[aborttransactionresult.AbortTransactionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbortTransaction' }})
    commit_transaction: Optional[committransactionresult.CommitTransactionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommitTransaction' }})
    end_session: Optional[endsessionresult.EndSessionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndSession' }})
    execute_statement: Optional[executestatementresult.ExecuteStatementResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecuteStatement' }})
    fetch_page: Optional[fetchpageresult.FetchPageResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FetchPage' }})
    start_session: Optional[startsessionresult.StartSessionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartSession' }})
    start_transaction: Optional[starttransactionresult.StartTransactionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTransaction' }})
    
