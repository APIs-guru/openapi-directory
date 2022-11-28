from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3TagIds:
    r"""S3TagIds
    List of S3 tag IDs
    """
    
    ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    
