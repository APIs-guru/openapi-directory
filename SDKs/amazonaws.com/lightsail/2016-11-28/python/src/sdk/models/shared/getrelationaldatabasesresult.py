from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relationaldatabase


@dataclass_json
@dataclass
class GetRelationalDatabasesResult:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    relational_databases: Optional[List[relationaldatabase.RelationalDatabase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabases' }})
    
