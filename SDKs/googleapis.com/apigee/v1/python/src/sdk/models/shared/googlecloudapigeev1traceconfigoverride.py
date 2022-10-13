from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1tracesamplingconfig


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TraceConfigOverride:
    api_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProxy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sampling_config: Optional[googlecloudapigeev1tracesamplingconfig.GoogleCloudApigeeV1TraceSamplingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingConfig' }})
    
