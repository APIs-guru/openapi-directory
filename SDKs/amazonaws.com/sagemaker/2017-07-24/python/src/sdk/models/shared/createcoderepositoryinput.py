from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gitconfig
from . import tag


@dataclass_json
@dataclass
class CreateCodeRepositoryInput:
    code_repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeRepositoryName' }})
    git_config: gitconfig.GitConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GitConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
