from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MergeRequest:
    urls: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    inline_pdf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlinePdf') }})
    
