from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListResultInvoiceDetailsAPIModel:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    error_messages: Optional[List[IErrorInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessages') }})
    is_faulted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsFaulted') }})
    result: Optional[List[InvoiceDetailsAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
