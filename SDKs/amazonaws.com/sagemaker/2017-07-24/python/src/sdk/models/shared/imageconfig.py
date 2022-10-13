from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import repositoryaccessmode_enum
from . import repositoryauthconfig


@dataclass_json
@dataclass
class ImageConfig:
    repository_access_mode: repositoryaccessmode_enum.RepositoryAccessModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryAccessMode' }})
    repository_auth_config: Optional[repositoryauthconfig.RepositoryAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryAuthConfig' }})
    
