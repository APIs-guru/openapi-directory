from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdateInformationAboutPagesSitePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum(str, Enum):
    GH_PAGES = "gh-pages"
    MASTER = "master"
    MASTER_DOCS = "master /docs"

class ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum(str, Enum):
    ROOT_ = "/"
    ROOT_DOCS = "/docs"


@dataclass_json
@dataclass
class ReposUpdateInformationAboutPagesSiteRequestBodySource2:
    r"""ReposUpdateInformationAboutPagesSiteRequestBodySource2
    Update the source for the repository. Must include the branch name and path.
    """
    
    branch: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    path: ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass_json
@dataclass
class ReposUpdateInformationAboutPagesSiteRequestBody:
    cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cname') }})
    https_enforced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('https_enforced') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    source: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass
class ReposUpdateInformationAboutPagesSiteRequest:
    path_params: ReposUpdateInformationAboutPagesSitePathParams = field()
    request: Optional[ReposUpdateInformationAboutPagesSiteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateInformationAboutPagesSiteResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
