from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sqlstatementresult


@dataclass_json
@dataclass
class ExecuteSQLResponse:
    sql_statement_results: Optional[List[sqlstatementresult.SQLStatementResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlStatementResults' }})
    
