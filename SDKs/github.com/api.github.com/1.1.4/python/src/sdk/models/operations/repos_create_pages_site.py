from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreatePagesSitePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposCreatePagesSiteRequestBodySourcePathEnum(str, Enum):
    ROOT_ = "/"
    ROOT_DOCS = "/docs"


@dataclass_json
@dataclass
class ReposCreatePagesSiteRequestBodySource:
    r"""ReposCreatePagesSiteRequestBodySource
    The source branch and directory used to publish your Pages site.
    """
    
    branch: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    path: Optional[ReposCreatePagesSiteRequestBodySourcePathEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass_json
@dataclass
class ReposCreatePagesSiteRequestBody:
    r"""ReposCreatePagesSiteRequestBody
    The source branch and directory used to publish your Pages site.
    """
    
    source: ReposCreatePagesSiteRequestBodySource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclass
class ReposCreatePagesSite415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposCreatePagesSiteRequest:
    path_params: ReposCreatePagesSitePathParams = field()
    request: Optional[ReposCreatePagesSiteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreatePagesSiteResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    page: Optional[shared.Page] = field(default=None)
    repos_create_pages_site_415_application_json_object: Optional[ReposCreatePagesSite415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
