from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExportAddress:
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
