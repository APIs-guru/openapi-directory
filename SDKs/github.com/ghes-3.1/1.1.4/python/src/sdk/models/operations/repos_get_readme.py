from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetReadmePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetReadmeQueryParams:
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetReadmeRequest:
    path_params: ReposGetReadmePathParams = field(default=None)
    query_params: ReposGetReadmeQueryParams = field(default=None)
    

@dataclass
class ReposGetReadmeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    content_file: Optional[shared.ContentFile] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
