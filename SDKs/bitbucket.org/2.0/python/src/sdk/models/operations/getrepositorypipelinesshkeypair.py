from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoryPipelineSSHKeyPairPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineSSHKeyPairRequest:
    path_params: GetRepositoryPipelineSSHKeyPairPathParams = field(default=None)
    

@dataclass
class GetRepositoryPipelineSSHKeyPairResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_ssh_key_pair: Optional[dict[str, Any]] = field(default=None)
    
