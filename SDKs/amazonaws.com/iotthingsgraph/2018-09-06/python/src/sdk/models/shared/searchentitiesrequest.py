from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum
from . import entityfilter


@dataclass_json
@dataclass
class SearchEntitiesRequest:
    entity_types: List[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypes' }})
    filters: Optional[List[entityfilter.EntityFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceVersion' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
