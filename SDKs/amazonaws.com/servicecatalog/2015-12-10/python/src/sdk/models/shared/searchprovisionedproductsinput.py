from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchProvisionedProductsInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    access_level_filter: Optional[AccessLevelFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLevelFilter') }})
    filters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    sort_order: Optional[SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    
