from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1traceconfigoverride


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListTraceConfigOverridesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    trace_config_overrides: Optional[List[googlecloudapigeev1traceconfigoverride.GoogleCloudApigeeV1TraceConfigOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceConfigOverrides' }})
    
