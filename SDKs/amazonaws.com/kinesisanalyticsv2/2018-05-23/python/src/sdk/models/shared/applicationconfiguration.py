from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationcodeconfiguration
from . import applicationsnapshotconfiguration
from . import environmentproperties
from . import flinkapplicationconfiguration
from . import sqlapplicationconfiguration
from . import vpcconfiguration
from . import zeppelinapplicationconfiguration


@dataclass_json
@dataclass
class ApplicationConfiguration:
    application_code_configuration: Optional[applicationcodeconfiguration.ApplicationCodeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationCodeConfiguration' }})
    application_snapshot_configuration: Optional[applicationsnapshotconfiguration.ApplicationSnapshotConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSnapshotConfiguration' }})
    environment_properties: Optional[environmentproperties.EnvironmentProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentProperties' }})
    flink_application_configuration: Optional[flinkapplicationconfiguration.FlinkApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlinkApplicationConfiguration' }})
    sql_application_configuration: Optional[sqlapplicationconfiguration.SQLApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlApplicationConfiguration' }})
    vpc_configurations: Optional[List[vpcconfiguration.VpcConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfigurations' }})
    zeppelin_application_configuration: Optional[zeppelinapplicationconfiguration.ZeppelinApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZeppelinApplicationConfiguration' }})
    
