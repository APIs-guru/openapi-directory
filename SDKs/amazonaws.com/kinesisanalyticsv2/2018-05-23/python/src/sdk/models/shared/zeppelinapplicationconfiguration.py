from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogconfiguration
from . import customartifactconfiguration
from . import deployasapplicationconfiguration
from . import zeppelinmonitoringconfiguration


@dataclass_json
@dataclass
class ZeppelinApplicationConfiguration:
    catalog_configuration: Optional[catalogconfiguration.CatalogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogConfiguration' }})
    custom_artifacts_configuration: Optional[List[customartifactconfiguration.CustomArtifactConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomArtifactsConfiguration' }})
    deploy_as_application_configuration: Optional[deployasapplicationconfiguration.DeployAsApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeployAsApplicationConfiguration' }})
    monitoring_configuration: Optional[zeppelinmonitoringconfiguration.ZeppelinMonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringConfiguration' }})
    
