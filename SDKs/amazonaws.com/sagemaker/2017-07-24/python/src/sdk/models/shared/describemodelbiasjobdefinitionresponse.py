from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeModelBiasJobDefinitionResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDefinitionArn') }})
    job_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDefinitionName') }})
    job_resources: MonitoringResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobResources') }})
    model_bias_app_specification: ModelBiasAppSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelBiasAppSpecification') }})
    model_bias_job_input: ModelBiasJobInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelBiasJobInput') }})
    model_bias_job_output_config: MonitoringOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelBiasJobOutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    model_bias_baseline_config: Optional[ModelBiasBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelBiasBaselineConfig') }})
    network_config: Optional[MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfig') }})
    stopping_condition: Optional[MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    
