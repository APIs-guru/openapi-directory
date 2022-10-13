from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import querydefinition


@dataclass_json
@dataclass
class DescribeQueryDefinitionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    query_definitions: Optional[List[querydefinition.QueryDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryDefinitions' }})
    
