from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import monitoringresources
from . import modelbiasappspecification
from . import modelbiasbaselineconfig
from . import modelbiasjobinput
from . import monitoringoutputconfig
from . import monitoringnetworkconfig
from . import monitoringstoppingcondition


@dataclass_json
@dataclass
class DescribeModelBiasJobDefinitionResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionArn' }})
    job_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionName' }})
    job_resources: monitoringresources.MonitoringResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobResources' }})
    model_bias_app_specification: modelbiasappspecification.ModelBiasAppSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelBiasAppSpecification' }})
    model_bias_baseline_config: Optional[modelbiasbaselineconfig.ModelBiasBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelBiasBaselineConfig' }})
    model_bias_job_input: modelbiasjobinput.ModelBiasJobInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelBiasJobInput' }})
    model_bias_job_output_config: monitoringoutputconfig.MonitoringOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelBiasJobOutputConfig' }})
    network_config: Optional[monitoringnetworkconfig.MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: Optional[monitoringstoppingcondition.MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    
