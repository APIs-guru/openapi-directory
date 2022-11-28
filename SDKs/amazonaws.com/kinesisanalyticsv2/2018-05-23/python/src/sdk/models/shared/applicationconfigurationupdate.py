from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationConfigurationUpdate:
    r"""ApplicationConfigurationUpdate
    Describes updates to an application's configuration.
    """
    
    application_code_configuration_update: Optional[ApplicationCodeConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeConfigurationUpdate') }})
    application_snapshot_configuration_update: Optional[ApplicationSnapshotConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSnapshotConfigurationUpdate') }})
    environment_property_updates: Optional[EnvironmentPropertyUpdates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentPropertyUpdates') }})
    flink_application_configuration_update: Optional[FlinkApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkApplicationConfigurationUpdate') }})
    sql_application_configuration_update: Optional[SQLApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlApplicationConfigurationUpdate') }})
    vpc_configuration_updates: Optional[List[VpcConfigurationUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationUpdates') }})
    zeppelin_application_configuration_update: Optional[ZeppelinApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZeppelinApplicationConfigurationUpdate') }})
    
