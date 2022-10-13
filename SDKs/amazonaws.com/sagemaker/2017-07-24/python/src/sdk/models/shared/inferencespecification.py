from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import modelpackagecontainerdefinition
from . import productionvariantinstancetype_enum
from . import transforminstancetype_enum


@dataclass_json
@dataclass
class InferenceSpecification:
    containers: List[modelpackagecontainerdefinition.ModelPackageContainerDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Containers' }})
    supported_content_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedContentTypes' }})
    supported_realtime_inference_instance_types: Optional[List[productionvariantinstancetype_enum.ProductionVariantInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedRealtimeInferenceInstanceTypes' }})
    supported_response_mime_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedResponseMIMETypes' }})
    supported_transform_instance_types: Optional[List[transforminstancetype_enum.TransformInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedTransformInstanceTypes' }})
    
