from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationtype_enum
from . import loglevel_enum
from . import metricslevel_enum


@dataclass_json
@dataclass
class MonitoringConfiguration:
    configuration_type: configurationtype_enum.ConfigurationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationType' }})
    log_level: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogLevel' }})
    metrics_level: Optional[metricslevel_enum.MetricsLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricsLevel' }})
    
