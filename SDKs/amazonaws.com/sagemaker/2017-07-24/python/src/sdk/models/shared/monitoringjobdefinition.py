from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoringbaselineconfig
from . import monitoringappspecification
from . import monitoringinput
from . import monitoringoutputconfig
from . import monitoringresources
from . import networkconfig
from . import monitoringstoppingcondition


@dataclass_json
@dataclass
class MonitoringJobDefinition:
    baseline_config: Optional[monitoringbaselineconfig.MonitoringBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineConfig' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    monitoring_app_specification: monitoringappspecification.MonitoringAppSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringAppSpecification' }})
    monitoring_inputs: List[monitoringinput.MonitoringInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringInputs' }})
    monitoring_output_config: monitoringoutputconfig.MonitoringOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringOutputConfig' }})
    monitoring_resources: monitoringresources.MonitoringResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringResources' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: Optional[monitoringstoppingcondition.MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    
