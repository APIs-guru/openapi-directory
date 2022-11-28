from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReposGetClonesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetClonesQueryParams:
    per: Optional[shared.PerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'per', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetClonesRequest:
    path_params: ReposGetClonesPathParams = field()
    query_params: ReposGetClonesQueryParams = field()
    

@dataclass
class ReposGetClonesResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    clone_traffic: Optional[shared.CloneTraffic] = field(default=None)
    
