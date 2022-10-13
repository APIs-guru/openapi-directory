from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogconfigurationupdate
from . import customartifactconfiguration
from . import deployasapplicationconfigurationupdate
from . import zeppelinmonitoringconfigurationupdate


@dataclass_json
@dataclass
class ZeppelinApplicationConfigurationUpdate:
    catalog_configuration_update: Optional[catalogconfigurationupdate.CatalogConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogConfigurationUpdate' }})
    custom_artifacts_configuration_update: Optional[List[customartifactconfiguration.CustomArtifactConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomArtifactsConfigurationUpdate' }})
    deploy_as_application_configuration_update: Optional[deployasapplicationconfigurationupdate.DeployAsApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeployAsApplicationConfigurationUpdate' }})
    monitoring_configuration_update: Optional[zeppelinmonitoringconfigurationupdate.ZeppelinMonitoringConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringConfigurationUpdate' }})
    
