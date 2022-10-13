from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_grants_grant


@dataclass_json
@dataclass
class APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant:
    entities: Optional[List[api_core_dto_grants_grant.APICoreDtoGrantsGrant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
