from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GistsForkPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsForkRequest:
    path_params: GistsForkPathParams = field()
    

@dataclass
class GistsForkResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    base_gist: Optional[shared.BaseGist] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
