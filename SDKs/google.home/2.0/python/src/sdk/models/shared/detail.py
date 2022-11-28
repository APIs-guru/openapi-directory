from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Detail:
    icon_list: List[IconList] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon_list') }})
    locale: Locale = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    timezone: Timezone = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
