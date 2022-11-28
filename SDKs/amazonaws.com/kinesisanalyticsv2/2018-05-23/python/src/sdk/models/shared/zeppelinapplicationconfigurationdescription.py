from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZeppelinApplicationConfigurationDescription:
    r"""ZeppelinApplicationConfigurationDescription
    The configuration of a Kinesis Data Analytics Studio notebook.
    """
    
    monitoring_configuration_description: ZeppelinMonitoringConfigurationDescription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationDescription') }})
    catalog_configuration_description: Optional[CatalogConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogConfigurationDescription') }})
    custom_artifacts_configuration_description: Optional[List[CustomArtifactConfigurationDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomArtifactsConfigurationDescription') }})
    deploy_as_application_configuration_description: Optional[DeployAsApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeployAsApplicationConfigurationDescription') }})
    
