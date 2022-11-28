from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateEndpointConfigInput:
    endpoint_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigName') }})
    production_variants: List[ProductionVariant] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionVariants') }})
    async_inference_config: Optional[AsyncInferenceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AsyncInferenceConfig') }})
    data_capture_config: Optional[DataCaptureConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCaptureConfig') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
