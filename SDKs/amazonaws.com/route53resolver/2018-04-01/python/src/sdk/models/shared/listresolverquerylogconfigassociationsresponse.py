from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListResolverQueryLogConfigAssociationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resolver_query_log_config_associations: Optional[List[ResolverQueryLogConfigAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfigAssociations') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    total_filtered_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalFilteredCount') }})
    
