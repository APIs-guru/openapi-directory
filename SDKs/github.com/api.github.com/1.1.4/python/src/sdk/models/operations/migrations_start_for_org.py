from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MigrationsStartForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MigrationsStartForOrgRequestBody:
    repositories: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    exclude: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude') }})
    exclude_attachments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude_attachments') }})
    lock_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock_repositories') }})
    

@dataclass
class MigrationsStartForOrgRequest:
    path_params: MigrationsStartForOrgPathParams = field()
    request: Optional[MigrationsStartForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrationsStartForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    migration: Optional[shared.Migration] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
