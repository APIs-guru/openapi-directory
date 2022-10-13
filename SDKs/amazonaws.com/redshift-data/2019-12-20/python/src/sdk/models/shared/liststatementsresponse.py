from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statementdata


@dataclass_json
@dataclass
class ListStatementsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    statements: List[statementdata.StatementData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statements' }})
    
