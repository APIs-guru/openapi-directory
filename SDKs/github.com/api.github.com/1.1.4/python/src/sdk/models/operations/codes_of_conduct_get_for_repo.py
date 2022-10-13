from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CodesOfConductGetForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodesOfConductGetForRepoRequest:
    path_params: CodesOfConductGetForRepoPathParams = field(default=None)
    

@dataclass
class CodesOfConductGetForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    code_of_conduct: Optional[shared.CodeOfConduct] = field(default=None)
    
