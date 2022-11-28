from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIResourceCoverageCoverage:
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downstream_id') }})
    downstream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downstream_name') }})
    pagination: Optional[PaginationCoverage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    pagination_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination_supported') }})
    supported_fields: Optional[List[SupportedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_fields') }})
    supported_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_filters') }})
    supported_list_fields: Optional[List[SupportedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_list_fields') }})
    supported_operations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_operations') }})
    supported_sort_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_sort_by') }})
    

@dataclass_json
@dataclass
class APIResourceCoverage:
    coverage: Optional[List[APIResourceCoverageCoverage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
