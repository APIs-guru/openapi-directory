from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetReadmeFromAltPathPathParams:
    dir: str = field(default=None, metadata={'path_param': { 'field_name': 'dir', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetReadmeFromAltPathQueryParams:
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetReadmeFromAltPathRequest:
    path_params: ReposGetReadmeFromAltPathPathParams = field(default=None)
    query_params: ReposGetReadmeFromAltPathQueryParams = field(default=None)
    

@dataclass
class ReposGetReadmeFromAltPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    content_file: Optional[shared.ContentFile] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
