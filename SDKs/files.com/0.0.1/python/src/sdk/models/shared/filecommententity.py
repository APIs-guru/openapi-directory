from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileCommentEntity:
    r"""FileCommentEntity
    List File Comments by path
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    reactions: Optional[FileCommentReactionEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    
