from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogconfigurationdescription
from . import customartifactconfigurationdescription
from . import deployasapplicationconfigurationdescription
from . import zeppelinmonitoringconfigurationdescription


@dataclass_json
@dataclass
class ZeppelinApplicationConfigurationDescription:
    catalog_configuration_description: Optional[catalogconfigurationdescription.CatalogConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogConfigurationDescription' }})
    custom_artifacts_configuration_description: Optional[List[customartifactconfigurationdescription.CustomArtifactConfigurationDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomArtifactsConfigurationDescription' }})
    deploy_as_application_configuration_description: Optional[deployasapplicationconfigurationdescription.DeployAsApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeployAsApplicationConfigurationDescription' }})
    monitoring_configuration_description: zeppelinmonitoringconfigurationdescription.ZeppelinMonitoringConfigurationDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringConfigurationDescription' }})
    
