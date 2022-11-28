from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdateInformationAboutPagesSitePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum(str, Enum):
    GH_PAGES = "gh-pages"
    MASTER = "master"
    MASTER_DOCS = "master /docs"


@dataclass_json
@dataclass
class ReposUpdateInformationAboutPagesSiteRequestBody:
    https_enforced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('https_enforced') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    source: Optional[ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

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
    
