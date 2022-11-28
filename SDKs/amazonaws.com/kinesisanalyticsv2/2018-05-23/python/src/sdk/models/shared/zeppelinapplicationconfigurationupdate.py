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
class ZeppelinApplicationConfigurationUpdate:
    r"""ZeppelinApplicationConfigurationUpdate
    Updates to the configuration of Kinesis Data Analytics Studio notebook.
    """
    
    catalog_configuration_update: Optional[CatalogConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogConfigurationUpdate') }})
    custom_artifacts_configuration_update: Optional[List[CustomArtifactConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomArtifactsConfigurationUpdate') }})
    deploy_as_application_configuration_update: Optional[DeployAsApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeployAsApplicationConfigurationUpdate') }})
    monitoring_configuration_update: Optional[ZeppelinMonitoringConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationUpdate') }})
    
