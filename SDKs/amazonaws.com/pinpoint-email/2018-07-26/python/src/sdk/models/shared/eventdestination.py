from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchdestination
from . import kinesisfirehosedestination
from . import eventtype_enum
from . import pinpointdestination
from . import snsdestination


@dataclass_json
@dataclass
class EventDestination:
    cloud_watch_destination: Optional[cloudwatchdestination.CloudWatchDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchDestination' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    kinesis_firehose_destination: Optional[kinesisfirehosedestination.KinesisFirehoseDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseDestination' }})
    matching_event_types: List[eventtype_enum.EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchingEventTypes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    pinpoint_destination: Optional[pinpointdestination.PinpointDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PinpointDestination' }})
    sns_destination: Optional[snsdestination.SnsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsDestination' }})
    
