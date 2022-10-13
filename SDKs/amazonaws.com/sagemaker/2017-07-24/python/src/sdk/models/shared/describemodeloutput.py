from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerdefinition
from . import inferenceexecutionconfig
from . import containerdefinition
from . import vpcconfig


@dataclass_json
@dataclass
class DescribeModelOutput:
    containers: Optional[List[containerdefinition.ContainerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Containers' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableNetworkIsolation' }})
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    inference_execution_config: Optional[inferenceexecutionconfig.InferenceExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceExecutionConfig' }})
    model_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    primary_container: Optional[containerdefinition.ContainerDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryContainer' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
