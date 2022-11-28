from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteFilesPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFilesPathQueryParams:
    recursive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteFilesPathRequest:
    path_params: DeleteFilesPathPathParams = field()
    query_params: DeleteFilesPathQueryParams = field()
    

@dataclass
class DeleteFilesPathResponse:
    content_type: str = field()
    status_code: int = field()
    
