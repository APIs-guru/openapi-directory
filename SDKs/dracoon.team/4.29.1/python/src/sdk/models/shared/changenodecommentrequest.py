from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChangeNodeCommentRequest:
    r"""ChangeNodeCommentRequest
    Request model for updating a node comment
    """
    
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
