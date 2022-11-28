from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Report:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    destination_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCount') }})
    destinations: Optional[List[Destination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    error_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCount') }})
    errors: Optional[List[Detail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    report_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportItemCount') }})
    routing: Optional[List[ItemRouting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    warning_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningCount') }})
    warnings: Optional[List[Detail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
