from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEndpointConfigOutput:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_config_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigArn') }})
    endpoint_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigName') }})
    production_variants: List[ProductionVariant] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionVariants') }})
    async_inference_config: Optional[AsyncInferenceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AsyncInferenceConfig') }})
    data_capture_config: Optional[DataCaptureConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCaptureConfig') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
