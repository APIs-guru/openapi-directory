from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asyncinferenceconfig
from . import datacaptureconfig
from . import productionvariant


@dataclass_json
@dataclass
class DescribeEndpointConfigOutput:
    async_inference_config: Optional[asyncinferenceconfig.AsyncInferenceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AsyncInferenceConfig' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_capture_config: Optional[datacaptureconfig.DataCaptureConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCaptureConfig' }})
    endpoint_config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigArn' }})
    endpoint_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigName' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    production_variants: List[productionvariant.ProductionVariant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductionVariants' }})
    
