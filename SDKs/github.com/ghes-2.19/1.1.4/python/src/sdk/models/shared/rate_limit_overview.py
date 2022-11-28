from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RateLimitOverviewResources:
    core: RateLimit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('core') }})
    search: RateLimit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('search') }})
    code_scanning_upload: Optional[RateLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code_scanning_upload') }})
    graphql: Optional[RateLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphql') }})
    integration_manifest: Optional[RateLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration_manifest') }})
    source_import: Optional[RateLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_import') }})
    

@dataclass_json
@dataclass
class RateLimitOverview:
    r"""RateLimitOverview
    Rate Limit Overview
    """
    
    rate: RateLimit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    resources: RateLimitOverviewResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
