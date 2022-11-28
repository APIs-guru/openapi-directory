from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListTraceConfigOverridesResponse:
    r"""GoogleCloudApigeeV1ListTraceConfigOverridesResponse
    Response for ListTraceConfigOverrides.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    trace_config_overrides: Optional[List[GoogleCloudApigeeV1TraceConfigOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceConfigOverrides') }})
    
