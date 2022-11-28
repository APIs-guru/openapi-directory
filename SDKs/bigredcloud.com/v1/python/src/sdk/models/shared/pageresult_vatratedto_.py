from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PageResultVatRateDto:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    items: Optional[List[VatRateDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    next_page_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageLink') }})
    
