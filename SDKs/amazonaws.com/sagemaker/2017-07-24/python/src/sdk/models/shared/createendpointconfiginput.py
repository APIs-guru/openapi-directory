from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asyncinferenceconfig
from . import datacaptureconfig
from . import productionvariant
from . import tag


@dataclass_json
@dataclass
class CreateEndpointConfigInput:
    async_inference_config: Optional[asyncinferenceconfig.AsyncInferenceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AsyncInferenceConfig' }})
    data_capture_config: Optional[datacaptureconfig.DataCaptureConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCaptureConfig' }})
    endpoint_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigName' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    production_variants: List[productionvariant.ProductionVariant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductionVariants' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
