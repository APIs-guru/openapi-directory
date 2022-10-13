from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataqualityappspecification
from . import dataqualitybaselineconfig
from . import dataqualityjobinput
from . import monitoringoutputconfig
from . import monitoringresources
from . import monitoringnetworkconfig
from . import monitoringstoppingcondition
from . import tag


@dataclass_json
@dataclass
class CreateDataQualityJobDefinitionRequest:
    data_quality_app_specification: dataqualityappspecification.DataQualityAppSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataQualityAppSpecification' }})
    data_quality_baseline_config: Optional[dataqualitybaselineconfig.DataQualityBaselineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataQualityBaselineConfig' }})
    data_quality_job_input: dataqualityjobinput.DataQualityJobInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataQualityJobInput' }})
    data_quality_job_output_config: monitoringoutputconfig.MonitoringOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataQualityJobOutputConfig' }})
    job_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionName' }})
    job_resources: monitoringresources.MonitoringResources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobResources' }})
    network_config: Optional[monitoringnetworkconfig.MonitoringNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: Optional[monitoringstoppingcondition.MonitoringStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
