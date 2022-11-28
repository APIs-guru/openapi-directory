from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReposListCollaboratorsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposListCollaboratorsAffiliationEnum(str, Enum):
    OUTSIDE = "outside"
    DIRECT = "direct"
    ALL = "all"


@dataclass
class ReposListCollaboratorsQueryParams:
    affiliation: Optional[ReposListCollaboratorsAffiliationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListCollaboratorsRequest:
    path_params: ReposListCollaboratorsPathParams = field()
    query_params: ReposListCollaboratorsQueryParams = field()
    

@dataclass
class ReposListCollaboratorsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    collaborators: Optional[List[shared.Collaborator]] = field(default=None)
    
