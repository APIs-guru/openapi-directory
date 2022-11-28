from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SerpData:
    query: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    website: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
