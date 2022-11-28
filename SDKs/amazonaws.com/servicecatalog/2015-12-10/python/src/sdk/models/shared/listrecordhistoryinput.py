from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRecordHistoryInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    access_level_filter: Optional[AccessLevelFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLevelFilter') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    search_filter: Optional[ListRecordHistorySearchFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchFilter') }})
    
