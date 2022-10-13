from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import relationaldatabaseparameter


@dataclass_json
@dataclass
class UpdateRelationalDatabaseParametersRequest:
    parameters: List[relationaldatabaseparameter.RelationalDatabaseParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    
