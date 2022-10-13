from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import monitoringresources
from . import modelqualityappspecification
from . import modelqualitybaselineconfig
from . import modelqualityjobinput
from . import monitoringoutputconfig
from . import monitoringnetworkconfig
from . import monitoringstoppingcondition


@dataclass_json
@dataclass
class DescribeModelQualityJobDefinitionResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionArn' }})
    job_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionName' }})
    job_resources: monitoringresources.MonitoringResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobResources' }})
    model_quality_app_specification: modelqualityappspecification.ModelQualityAppSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelQualityAppSpecification' }})
    model_quality_baseline_config: Optional[modelqualitybaselineconfig.ModelQualityBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelQualityBaselineConfig' }})
    model_quality_job_input: modelqualityjobinput.ModelQualityJobInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelQualityJobInput' }})
    model_quality_job_output_config: monitoringoutputconfig.MonitoringOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelQualityJobOutputConfig' }})
    network_config: Optional[monitoringnetworkconfig.MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: Optional[monitoringstoppingcondition.MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    
