from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFileMigrationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileMigrationsIDRequest:
    path_params: GetFileMigrationsIDPathParams = field()
    

@dataclass
class GetFileMigrationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    file_migration_entity: Optional[shared.FileMigrationEntity] = field(default=None)
    
