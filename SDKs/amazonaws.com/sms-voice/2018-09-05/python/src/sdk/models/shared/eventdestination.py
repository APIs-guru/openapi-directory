from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogsdestination
from . import kinesisfirehosedestination
from . import eventtype_enum
from . import snsdestination


@dataclass_json
@dataclass
class EventDestination:
    cloud_watch_logs_destination: Optional[cloudwatchlogsdestination.CloudWatchLogsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsDestination' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    kinesis_firehose_destination: Optional[kinesisfirehosedestination.KinesisFirehoseDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseDestination' }})
    matching_event_types: Optional[List[eventtype_enum.EventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchingEventTypes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    sns_destination: Optional[snsdestination.SnsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsDestination' }})
    
