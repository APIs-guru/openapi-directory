from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MigrationsGetLargeFilesPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsGetLargeFilesRequest:
    path_params: MigrationsGetLargeFilesPathParams = field(default=None)
    

@dataclass
class MigrationsGetLargeFilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    porter_large_files: Optional[List[shared.PorterLargeFile]] = field(default=None)
    
