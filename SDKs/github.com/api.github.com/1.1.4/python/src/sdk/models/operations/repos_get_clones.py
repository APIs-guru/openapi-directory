from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ReposGetClonesPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetClonesQueryParams:
    per: Optional[shared.PerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'per', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetClonesRequest:
    path_params: ReposGetClonesPathParams = field(default=None)
    query_params: ReposGetClonesQueryParams = field(default=None)
    

@dataclass
class ReposGetClonesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    clone_traffic: Optional[shared.CloneTraffic] = field(default=None)
    
