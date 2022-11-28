from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateUsingTemplatePathParams:
    template_owner: str = field(metadata={'path_param': { 'field_name': 'template_owner', 'style': 'simple', 'explode': False }})
    template_repo: str = field(metadata={'path_param': { 'field_name': 'template_repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateUsingTemplateRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    include_all_branches: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_all_branches') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    

@dataclass
class ReposCreateUsingTemplateRequest:
    path_params: ReposCreateUsingTemplatePathParams = field()
    request: Optional[ReposCreateUsingTemplateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateUsingTemplateResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    repository: Optional[shared.Repository] = field(default=None)
    
