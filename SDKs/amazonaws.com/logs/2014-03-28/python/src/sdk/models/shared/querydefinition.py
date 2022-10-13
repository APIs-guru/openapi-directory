from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryDefinition:
    last_modified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified' }})
    log_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupNames' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    query_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryDefinitionId' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    
