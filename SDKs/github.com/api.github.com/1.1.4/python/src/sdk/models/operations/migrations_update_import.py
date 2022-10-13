from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class MigrationsUpdateImportPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MigrationsUpdateImportRequestBody:
    tfvc_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tfvc_project' }})
    vcs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs' }})
    vcs_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs_password' }})
    vcs_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs_username' }})
    

@dataclass
class MigrationsUpdateImportRequest:
    path_params: MigrationsUpdateImportPathParams = field(default=None)
    request: Optional[MigrationsUpdateImportRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrationsUpdateImportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    import_: Optional[shared.Import] = field(default=None)
    
