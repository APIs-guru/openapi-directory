from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateUsingTemplatePathParams:
    template_owner: str = field(default=None, metadata={'path_param': { 'field_name': 'template_owner', 'style': 'simple', 'explode': False }})
    template_repo: str = field(default=None, metadata={'path_param': { 'field_name': 'template_repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateUsingTemplateRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    include_all_branches: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_all_branches' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    

@dataclass
class ReposCreateUsingTemplateRequest:
    path_params: ReposCreateUsingTemplatePathParams = field(default=None)
    request: Optional[ReposCreateUsingTemplateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateUsingTemplateResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    repository: Optional[shared.Repository] = field(default=None)
    
