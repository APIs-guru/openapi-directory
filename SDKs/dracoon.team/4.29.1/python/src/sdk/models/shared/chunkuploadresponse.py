from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChunkUploadResponse:
    r"""ChunkUploadResponse
    Chunk upload response
    """
    
    hash: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
