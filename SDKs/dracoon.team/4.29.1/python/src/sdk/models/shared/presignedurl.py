from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PresignedURL:
    r"""PresignedURL
    Presigned URL information
    """
    
    part_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partNumber') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
