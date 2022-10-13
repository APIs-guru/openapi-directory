from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListArtifactsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListArtifactsForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListArtifactsForRepoRequest:
    path_params: ActionsListArtifactsForRepoPathParams = field(default=None)
    query_params: ActionsListArtifactsForRepoQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListArtifactsForRepo200ApplicationJSON:
    artifacts: List[shared.Artifact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListArtifactsForRepoResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_artifacts_for_repo_200_application_json_object: Optional[ActionsListArtifactsForRepo200ApplicationJSON] = field(default=None)
    
