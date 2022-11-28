from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListResolverQueryLogConfigsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resolver_query_log_configs: Optional[List[ResolverQueryLogConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfigs') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    total_filtered_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalFilteredCount') }})
    
