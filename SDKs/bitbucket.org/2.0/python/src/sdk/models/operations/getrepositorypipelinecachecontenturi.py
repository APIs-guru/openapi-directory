from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineCacheContentURIPathParams:
    cache_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'cache_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineCacheContentURIRequest:
    path_params: GetRepositoryPipelineCacheContentURIPathParams = field(default=None)
    

@dataclass
class GetRepositoryPipelineCacheContentURIResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_cache_content_uri: Optional[shared.PipelineCacheContentURI] = field(default=None)
    
