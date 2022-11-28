from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class OrgsListOutsideCollaboratorsPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsListOutsideCollaboratorsFilterEnum(str, Enum):
    TWOFA_DISABLED = "2fa_disabled"
    ALL = "all"


@dataclass
class OrgsListOutsideCollaboratorsQueryParams:
    filter: Optional[OrgsListOutsideCollaboratorsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListOutsideCollaboratorsRequest:
    path_params: OrgsListOutsideCollaboratorsPathParams = field()
    query_params: OrgsListOutsideCollaboratorsQueryParams = field()
    

@dataclass
class OrgsListOutsideCollaboratorsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
