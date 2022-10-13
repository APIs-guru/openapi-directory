from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rate_limit
from . import rate_limit
from . import rate_limit
from . import rate_limit
from . import rate_limit
from . import rate_limit
from . import rate_limit


@dataclass_json
@dataclass
class RateLimitOverviewResources:
    code_scanning_upload: Optional[rate_limit.RateLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code_scanning_upload' }})
    core: rate_limit.RateLimit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'core' }})
    graphql: Optional[rate_limit.RateLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graphql' }})
    integration_manifest: Optional[rate_limit.RateLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integration_manifest' }})
    search: rate_limit.RateLimit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search' }})
    source_import: Optional[rate_limit.RateLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_import' }})
    

@dataclass_json
@dataclass
class RateLimitOverview:
    rate: rate_limit.RateLimit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    resources: RateLimitOverviewResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
