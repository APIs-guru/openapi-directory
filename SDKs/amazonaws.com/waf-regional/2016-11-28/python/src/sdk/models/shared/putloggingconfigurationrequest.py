from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import loggingconfiguration


@dataclass_json
@dataclass
class PutLoggingConfigurationRequest:
    logging_configuration: loggingconfiguration.LoggingConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfiguration' }})
    
