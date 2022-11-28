from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoryPipelineKeyPairPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoryPipelineKeyPairRequest:
    path_params: DeleteRepositoryPipelineKeyPairPathParams = field()
    

@dataclass
class DeleteRepositoryPipelineKeyPairResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
