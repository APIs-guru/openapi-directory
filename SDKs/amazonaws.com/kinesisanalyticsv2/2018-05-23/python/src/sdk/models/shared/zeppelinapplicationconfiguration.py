from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZeppelinApplicationConfiguration:
    r"""ZeppelinApplicationConfiguration
    The configuration of a Kinesis Data Analytics Studio notebook.
    """
    
    catalog_configuration: Optional[CatalogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogConfiguration') }})
    custom_artifacts_configuration: Optional[List[CustomArtifactConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomArtifactsConfiguration') }})
    deploy_as_application_configuration: Optional[DeployAsApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeployAsApplicationConfiguration') }})
    monitoring_configuration: Optional[ZeppelinMonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfiguration') }})
    
