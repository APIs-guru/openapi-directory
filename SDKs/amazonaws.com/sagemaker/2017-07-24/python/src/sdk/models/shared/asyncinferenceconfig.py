from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AsyncInferenceConfig:
    r"""AsyncInferenceConfig
    Specifies configuration for how an endpoint performs asynchronous inference.
    """
    
    output_config: AsyncInferenceOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    client_config: Optional[AsyncInferenceClientConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientConfig') }})
    
