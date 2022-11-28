from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationConfigurationDescription:
    r"""ApplicationConfigurationDescription
    Describes details about the application code and starting parameters for a Kinesis Data Analytics application.
    """
    
    application_code_configuration_description: Optional[ApplicationCodeConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeConfigurationDescription') }})
    application_snapshot_configuration_description: Optional[ApplicationSnapshotConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSnapshotConfigurationDescription') }})
    environment_property_descriptions: Optional[EnvironmentPropertyDescriptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentPropertyDescriptions') }})
    flink_application_configuration_description: Optional[FlinkApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkApplicationConfigurationDescription') }})
    run_configuration_description: Optional[RunConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfigurationDescription') }})
    sql_application_configuration_description: Optional[SQLApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlApplicationConfigurationDescription') }})
    vpc_configuration_descriptions: Optional[List[VpcConfigurationDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationDescriptions') }})
    zeppelin_application_configuration_description: Optional[ZeppelinApplicationConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZeppelinApplicationConfigurationDescription') }})
    
