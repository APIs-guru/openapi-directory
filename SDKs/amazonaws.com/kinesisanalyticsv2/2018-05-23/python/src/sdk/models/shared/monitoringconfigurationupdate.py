from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationtype_enum
from . import loglevel_enum
from . import metricslevel_enum


@dataclass_json
@dataclass
class MonitoringConfigurationUpdate:
    configuration_type_update: Optional[configurationtype_enum.ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationTypeUpdate' }})
    log_level_update: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogLevelUpdate' }})
    metrics_level_update: Optional[metricslevel_enum.MetricsLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricsLevelUpdate' }})
    
