from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MigrationsDeleteArchiveForOrgPathParams:
    migration_id: int = field(default=None, metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsDeleteArchiveForOrgRequest:
    path_params: MigrationsDeleteArchiveForOrgPathParams = field(default=None)
    

@dataclass
class MigrationsDeleteArchiveForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
