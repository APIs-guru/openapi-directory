from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFileMigrationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileMigrationsIDRequest:
    path_params: GetFileMigrationsIDPathParams = field(default=None)
    

@dataclass
class GetFileMigrationsIDResponse:
    content_type: str = field(default=None)
    file_migration_entity: Optional[shared.FileMigrationEntity] = field(default=None)
    status_code: int = field(default=None)
    
