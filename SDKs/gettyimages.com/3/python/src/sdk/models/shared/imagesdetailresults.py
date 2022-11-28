from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImagesDetailResults:
    images: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    images_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images_not_found') }})
    
