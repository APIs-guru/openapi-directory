from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteFilesPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFilesPathQueryParams:
    recursive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteFilesPathRequest:
    path_params: DeleteFilesPathPathParams = field(default=None)
    query_params: DeleteFilesPathQueryParams = field(default=None)
    

@dataclass
class DeleteFilesPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
