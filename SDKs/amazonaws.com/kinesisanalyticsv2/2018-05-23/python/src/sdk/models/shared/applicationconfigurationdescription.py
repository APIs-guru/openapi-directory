from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationcodeconfigurationdescription
from . import applicationsnapshotconfigurationdescription
from . import environmentpropertydescriptions
from . import flinkapplicationconfigurationdescription
from . import runconfigurationdescription
from . import sqlapplicationconfigurationdescription
from . import vpcconfigurationdescription
from . import zeppelinapplicationconfigurationdescription


@dataclass_json
@dataclass
class ApplicationConfigurationDescription:
    application_code_configuration_description: Optional[applicationcodeconfigurationdescription.ApplicationCodeConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationCodeConfigurationDescription' }})
    application_snapshot_configuration_description: Optional[applicationsnapshotconfigurationdescription.ApplicationSnapshotConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSnapshotConfigurationDescription' }})
    environment_property_descriptions: Optional[environmentpropertydescriptions.EnvironmentPropertyDescriptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentPropertyDescriptions' }})
    flink_application_configuration_description: Optional[flinkapplicationconfigurationdescription.FlinkApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlinkApplicationConfigurationDescription' }})
    run_configuration_description: Optional[runconfigurationdescription.RunConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunConfigurationDescription' }})
    sql_application_configuration_description: Optional[sqlapplicationconfigurationdescription.SQLApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlApplicationConfigurationDescription' }})
    vpc_configuration_descriptions: Optional[List[vpcconfigurationdescription.VpcConfigurationDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfigurationDescriptions' }})
    zeppelin_application_configuration_description: Optional[zeppelinapplicationconfigurationdescription.ZeppelinApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZeppelinApplicationConfigurationDescription' }})
    
