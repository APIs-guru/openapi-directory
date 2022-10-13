from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitconfigforupdate


@dataclass_json
@dataclass
class UpdateCodeRepositoryInput:
    code_repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeRepositoryName' }})
    git_config: Optional[gitconfigforupdate.GitConfigForUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GitConfig' }})
    
