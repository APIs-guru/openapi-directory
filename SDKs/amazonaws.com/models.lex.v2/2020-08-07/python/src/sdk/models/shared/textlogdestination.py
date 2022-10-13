from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cloudwatchloggrouplogdestination


@dataclass_json
@dataclass
class TextLogDestination:
    cloud_watch: cloudwatchloggrouplogdestination.CloudWatchLogGroupLogDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatch' }})
    
