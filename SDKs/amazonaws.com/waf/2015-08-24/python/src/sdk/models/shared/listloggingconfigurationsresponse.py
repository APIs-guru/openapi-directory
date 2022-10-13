from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loggingconfiguration


@dataclass_json
@dataclass
class ListLoggingConfigurationsResponse:
    logging_configurations: Optional[List[loggingconfiguration.LoggingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfigurations' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
