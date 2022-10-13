from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DomainRankPathParams:
    domain: str = field(default=None, metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    

@dataclass
class DomainRankRequest:
    path_params: DomainRankPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DomainRank200ApplicationJSON:
    rank: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    

@dataclass
class DomainRankResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    domain_rank_200_application_json_object: Optional[DomainRank200ApplicationJSON] = field(default=None)
    
