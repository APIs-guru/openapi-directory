from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import relationaldatabase


@dataclass_json
@dataclass
class GetRelationalDatabaseResult:
    relational_database: Optional[relationaldatabase.RelationalDatabase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabase' }})
    
