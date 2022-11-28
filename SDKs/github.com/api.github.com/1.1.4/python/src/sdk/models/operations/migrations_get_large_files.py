from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MigrationsGetLargeFilesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsGetLargeFilesRequest:
    path_params: MigrationsGetLargeFilesPathParams = field()
    

@dataclass
class MigrationsGetLargeFilesResponse:
    content_type: str = field()
    status_code: int = field()
    porter_large_files: Optional[List[shared.PorterLargeFile]] = field(default=None)
    
