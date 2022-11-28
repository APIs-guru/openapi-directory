from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteSQLResponse:
    r"""ExecuteSQLResponse
    The response elements represent the output of a request to run one or more SQL statements.
    """
    
    sql_statement_results: Optional[List[SQLStatementResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlStatementResults') }})
    
