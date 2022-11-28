from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MigrationsDownloadArchiveForOrgPathParams:
    migration_id: int = field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsDownloadArchiveForOrgRequest:
    path_params: MigrationsDownloadArchiveForOrgPathParams = field()
    

@dataclass
class MigrationsDownloadArchiveForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
