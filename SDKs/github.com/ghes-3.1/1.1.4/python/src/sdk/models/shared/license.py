from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class License:
    r"""License
    License
    """
    
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    conditions: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    featured: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    implementation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('implementation') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    limitations: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitations') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    permissions: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    spdx_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
