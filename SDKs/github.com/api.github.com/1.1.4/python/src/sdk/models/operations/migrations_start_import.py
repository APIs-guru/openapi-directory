from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MigrationsStartImportPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class MigrationsStartImportRequestBodyVcsEnum(str, Enum):
    SUBVERSION = "subversion"
    GIT = "git"
    MERCURIAL = "mercurial"
    TFVC = "tfvc"


@dataclass_json
@dataclass
class MigrationsStartImportRequestBody:
    vcs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_url') }})
    tfvc_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfvc_project') }})
    vcs: Optional[MigrationsStartImportRequestBodyVcsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs') }})
    vcs_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_password') }})
    vcs_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_username') }})
    

@dataclass
class MigrationsStartImportRequest:
    path_params: MigrationsStartImportPathParams = field()
    request: Optional[MigrationsStartImportRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrationsStartImportResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    import_: Optional[shared.Import] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
