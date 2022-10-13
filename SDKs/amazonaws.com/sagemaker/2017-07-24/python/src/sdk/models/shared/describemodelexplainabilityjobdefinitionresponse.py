from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import monitoringresources
from . import modelexplainabilityappspecification
from . import modelexplainabilitybaselineconfig
from . import modelexplainabilityjobinput
from . import monitoringoutputconfig
from . import monitoringnetworkconfig
from . import monitoringstoppingcondition


@dataclass_json
@dataclass
class DescribeModelExplainabilityJobDefinitionResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionArn' }})
    job_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionName' }})
    job_resources: monitoringresources.MonitoringResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobResources' }})
    model_explainability_app_specification: modelexplainabilityappspecification.ModelExplainabilityAppSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelExplainabilityAppSpecification' }})
    model_explainability_baseline_config: Optional[modelexplainabilitybaselineconfig.ModelExplainabilityBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelExplainabilityBaselineConfig' }})
    model_explainability_job_input: modelexplainabilityjobinput.ModelExplainabilityJobInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelExplainabilityJobInput' }})
    model_explainability_job_output_config: monitoringoutputconfig.MonitoringOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelExplainabilityJobOutputConfig' }})
    network_config: Optional[monitoringnetworkconfig.MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: Optional[monitoringstoppingcondition.MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    
