from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MigrationsUpdateImportPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MigrationsUpdateImportRequestBody:
    tfvc_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfvc_project') }})
    vcs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs') }})
    vcs_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_password') }})
    vcs_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_username') }})
    

@dataclass
class MigrationsUpdateImportRequest:
    path_params: MigrationsUpdateImportPathParams = field()
    request: Optional[MigrationsUpdateImportRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrationsUpdateImportResponse:
    content_type: str = field()
    status_code: int = field()
    import_: Optional[shared.Import] = field(default=None)
    
