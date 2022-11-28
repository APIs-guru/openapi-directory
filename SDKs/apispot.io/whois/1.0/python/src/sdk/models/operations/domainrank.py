from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DomainRankPathParams:
    domain: str = field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DomainRank200ApplicationJSON:
    rank: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    

@dataclass
class DomainRankRequest:
    path_params: DomainRankPathParams = field()
    

@dataclass
class DomainRankResponse:
    content_type: str = field()
    status_code: int = field()
    domain_rank_200_application_json_object: Optional[DomainRank200ApplicationJSON] = field(default=None)
    
