from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdateReleasePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateReleaseRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prerelease: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerelease') }})
    tag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_name') }})
    target_commitish: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_commitish') }})
    

@dataclass
class ReposUpdateReleaseRequest:
    path_params: ReposUpdateReleasePathParams = field()
    request: Optional[ReposUpdateReleaseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateReleaseResponse:
    content_type: str = field()
    status_code: int = field()
    release: Optional[shared.Release] = field(default=None)
    
