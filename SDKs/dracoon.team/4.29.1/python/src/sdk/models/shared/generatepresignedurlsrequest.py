from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeneratePresignedUrlsRequest:
    r"""GeneratePresignedUrlsRequest
    Request model for generating presigned URLs
    """
    
    first_part_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPartNumber') }})
    last_part_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPartNumber') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
