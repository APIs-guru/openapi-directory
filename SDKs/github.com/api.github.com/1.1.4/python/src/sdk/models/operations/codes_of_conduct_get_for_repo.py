from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CodesOfConductGetForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class CodesOfConductGetForRepoRequest:
    path_params: CodesOfConductGetForRepoPathParams = field()
    

@dataclass
class CodesOfConductGetForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    code_of_conduct: Optional[shared.CodeOfConduct] = field(default=None)
    
