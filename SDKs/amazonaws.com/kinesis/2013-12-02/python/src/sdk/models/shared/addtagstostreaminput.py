from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddTagsToStreamInput:
    r"""AddTagsToStreamInput
    Represents the input for <code>AddTagsToStream</code>.
    """
    
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    tags: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
