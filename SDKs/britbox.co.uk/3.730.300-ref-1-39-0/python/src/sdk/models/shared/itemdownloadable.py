from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemDownloadable:
    downloadable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadable') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
