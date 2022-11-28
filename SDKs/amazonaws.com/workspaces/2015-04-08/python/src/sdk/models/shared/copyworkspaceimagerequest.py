from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CopyWorkspaceImageRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    source_image_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImageId') }})
    source_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceRegion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
