from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InferenceSpecification:
    r"""InferenceSpecification
    Defines how to perform inference generation after a training job is run.
    """
    
    containers: List[ModelPackageContainerDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Containers') }})
    supported_content_types: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedContentTypes') }})
    supported_response_mime_types: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedResponseMIMETypes') }})
    supported_realtime_inference_instance_types: Optional[List[ProductionVariantInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedRealtimeInferenceInstanceTypes') }})
    supported_transform_instance_types: Optional[List[TransformInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedTransformInstanceTypes') }})
    
