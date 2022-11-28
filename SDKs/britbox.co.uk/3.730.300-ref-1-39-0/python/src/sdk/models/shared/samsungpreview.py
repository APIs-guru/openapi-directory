from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SamsungPreview:
    sections: List[SamsungPreviewSection] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    expires_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_only') }})
    
