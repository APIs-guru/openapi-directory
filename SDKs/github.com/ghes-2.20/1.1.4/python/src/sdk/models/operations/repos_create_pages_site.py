from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreatePagesSitePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposCreatePagesSiteRequestBodySourceBranchEnum(str, Enum):
    MASTER = "master"
    GH_PAGES = "gh-pages"

class ReposCreatePagesSiteRequestBodySourcePathEnum(str, Enum):
    ROOT_ = "/"
    ROOT_DOCS = "/docs"


@dataclass_json
@dataclass
class ReposCreatePagesSiteRequestBodySource:
    branch: ReposCreatePagesSiteRequestBodySourceBranchEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    path: Optional[ReposCreatePagesSiteRequestBodySourcePathEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass_json
@dataclass
class ReposCreatePagesSiteRequestBody:
    source: ReposCreatePagesSiteRequestBodySource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass
class ReposCreatePagesSiteRequest:
    path_params: ReposCreatePagesSitePathParams = field(default=None)
    request: Optional[ReposCreatePagesSiteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ReposCreatePagesSite415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposCreatePagesSiteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    page: Optional[shared.Page] = field(default=None)
    repos_create_pages_site_415_application_json_object: Optional[ReposCreatePagesSite415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
