from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationConfiguration:
    r"""ApplicationConfiguration
    Specifies the creation parameters for a Kinesis Data Analytics application.
    """
    
    application_code_configuration: Optional[ApplicationCodeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeConfiguration') }})
    application_snapshot_configuration: Optional[ApplicationSnapshotConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSnapshotConfiguration') }})
    environment_properties: Optional[EnvironmentProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentProperties') }})
    flink_application_configuration: Optional[FlinkApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkApplicationConfiguration') }})
    sql_application_configuration: Optional[SQLApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlApplicationConfiguration') }})
    vpc_configurations: Optional[List[VpcConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurations') }})
    zeppelin_application_configuration: Optional[ZeppelinApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZeppelinApplicationConfiguration') }})
    
