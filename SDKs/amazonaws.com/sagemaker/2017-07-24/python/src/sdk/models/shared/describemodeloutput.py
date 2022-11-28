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
class DescribeModelOutput:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    model_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    containers: Optional[List[ContainerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Containers') }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableNetworkIsolation') }})
    inference_execution_config: Optional[InferenceExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceExecutionConfig') }})
    primary_container: Optional[ContainerDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryContainer') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
