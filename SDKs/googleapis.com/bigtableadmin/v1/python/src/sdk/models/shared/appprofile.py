from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppProfile:
    r"""AppProfile
    A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    multi_cluster_routing_use_any: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiClusterRoutingUseAny') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    single_cluster_routing: Optional[SingleClusterRouting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleClusterRouting') }})
    
