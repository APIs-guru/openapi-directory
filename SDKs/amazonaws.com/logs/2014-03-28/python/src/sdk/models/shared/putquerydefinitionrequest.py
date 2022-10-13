from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutQueryDefinitionRequest:
    log_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupNames' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    query_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryDefinitionId' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    
