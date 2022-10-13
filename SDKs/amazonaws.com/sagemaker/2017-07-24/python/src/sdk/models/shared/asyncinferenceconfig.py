from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import asyncinferenceclientconfig
from . import asyncinferenceoutputconfig


@dataclass_json
@dataclass
class AsyncInferenceConfig:
    client_config: Optional[asyncinferenceclientconfig.AsyncInferenceClientConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientConfig' }})
    output_config: asyncinferenceoutputconfig.AsyncInferenceOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    
