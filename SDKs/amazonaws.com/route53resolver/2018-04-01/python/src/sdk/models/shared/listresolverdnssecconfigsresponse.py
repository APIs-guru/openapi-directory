from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListResolverDnssecConfigsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resolver_dnssec_configs: Optional[List[ResolverDnssecConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverDnssecConfigs') }})
    
