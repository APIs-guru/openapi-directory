from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TraceConfigOverride:
    r"""GoogleCloudApigeeV1TraceConfigOverride
    A representation of a configuration override.
    """
    
    api_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiProxy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sampling_config: Optional[GoogleCloudApigeeV1TraceSamplingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingConfig') }})
    
