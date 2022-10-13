from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import asyncinferenceconfig
from . import datacaptureconfigsummary
from . import endpointstatus_enum
from . import deploymentconfig
from . import productionvariantsummary


@dataclass_json
@dataclass
class DescribeEndpointOutput:
    async_inference_config: Optional[asyncinferenceconfig.AsyncInferenceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AsyncInferenceConfig' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_capture_config: Optional[datacaptureconfigsummary.DataCaptureConfigSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCaptureConfig' }})
    endpoint_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    endpoint_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigName' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    endpoint_status: endpointstatus_enum.EndpointStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointStatus' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_deployment_config: Optional[deploymentconfig.DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastDeploymentConfig' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    production_variants: Optional[List[productionvariantsummary.ProductionVariantSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductionVariants' }})
    
