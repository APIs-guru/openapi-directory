from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdateInformationAboutPagesSitePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
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
    branch: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    path: ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass_json
@dataclass
class ReposUpdateInformationAboutPagesSiteRequestBody:
    cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cname' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    source: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass
class ReposUpdateInformationAboutPagesSiteRequest:
    path_params: ReposUpdateInformationAboutPagesSitePathParams = field(default=None)
    request: Optional[ReposUpdateInformationAboutPagesSiteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateInformationAboutPagesSiteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
