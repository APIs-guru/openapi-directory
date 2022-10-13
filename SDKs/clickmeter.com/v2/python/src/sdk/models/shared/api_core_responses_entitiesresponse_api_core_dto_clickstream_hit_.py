from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_clickstream_hit


@dataclass_json
@dataclass
class APICoreResponsesEntitiesResponseAPICoreDtoClickStreamHit:
    entities: Optional[List[api_core_dto_clickstream_hit.APICoreDtoClickStreamHit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
