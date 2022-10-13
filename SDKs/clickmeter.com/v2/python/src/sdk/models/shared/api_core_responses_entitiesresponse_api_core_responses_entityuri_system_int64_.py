from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_responses_entityuri_system_int64_


@dataclass_json
@dataclass
class APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64:
    entities: Optional[List[api_core_responses_entityuri_system_int64_.APICoreResponsesEntityURISystemInt64]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
