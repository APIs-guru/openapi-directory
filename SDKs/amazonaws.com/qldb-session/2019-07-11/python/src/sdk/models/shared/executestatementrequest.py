from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import valueholder


@dataclass_json
@dataclass
class ExecuteStatementRequest:
    parameters: Optional[List[valueholder.ValueHolder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    statement: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statement' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionId' }})
    
