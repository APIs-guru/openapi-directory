from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationcodeconfigurationupdate
from . import applicationsnapshotconfigurationupdate
from . import environmentpropertyupdates
from . import flinkapplicationconfigurationupdate
from . import sqlapplicationconfigurationupdate
from . import vpcconfigurationupdate
from . import zeppelinapplicationconfigurationupdate


@dataclass_json
@dataclass
class ApplicationConfigurationUpdate:
    application_code_configuration_update: Optional[applicationcodeconfigurationupdate.ApplicationCodeConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationCodeConfigurationUpdate' }})
    application_snapshot_configuration_update: Optional[applicationsnapshotconfigurationupdate.ApplicationSnapshotConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSnapshotConfigurationUpdate' }})
    environment_property_updates: Optional[environmentpropertyupdates.EnvironmentPropertyUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentPropertyUpdates' }})
    flink_application_configuration_update: Optional[flinkapplicationconfigurationupdate.FlinkApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlinkApplicationConfigurationUpdate' }})
    sql_application_configuration_update: Optional[sqlapplicationconfigurationupdate.SQLApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlApplicationConfigurationUpdate' }})
    vpc_configuration_updates: Optional[List[vpcconfigurationupdate.VpcConfigurationUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfigurationUpdates' }})
    zeppelin_application_configuration_update: Optional[zeppelinapplicationconfigurationupdate.ZeppelinApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZeppelinApplicationConfigurationUpdate' }})
    
