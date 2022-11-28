from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCodeRepositoryInput:
    code_repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeRepositoryName') }})
    git_config: GitConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GitConfig') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
