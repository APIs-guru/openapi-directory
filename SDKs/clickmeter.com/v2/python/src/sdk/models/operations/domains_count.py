from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DomainsCountTypeEnum(str, Enum):
    SYSTEM = "system"
    GO = "go"
    PERSONAL = "personal"
    DEDICATED = "dedicated"


@dataclass
class DomainsCountQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    type: Optional[DomainsCountTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DomainsCountRequest:
    query_params: DomainsCountQueryParams = field()
    

@dataclass
class DomainsCountResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
