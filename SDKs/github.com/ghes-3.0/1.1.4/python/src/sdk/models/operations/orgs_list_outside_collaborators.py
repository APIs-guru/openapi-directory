from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class OrgsListOutsideCollaboratorsPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
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
    path_params: OrgsListOutsideCollaboratorsPathParams = field(default=None)
    query_params: OrgsListOutsideCollaboratorsQueryParams = field(default=None)
    

@dataclass
class OrgsListOutsideCollaboratorsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
