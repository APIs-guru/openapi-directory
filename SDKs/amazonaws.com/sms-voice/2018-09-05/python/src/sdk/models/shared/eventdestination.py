from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventDestination:
    r"""EventDestination
    An object that defines an event destination.
    """
    
    cloud_watch_logs_destination: Optional[CloudWatchLogsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogsDestination') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    kinesis_firehose_destination: Optional[KinesisFirehoseDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseDestination') }})
    matching_event_types: Optional[List[EventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchingEventTypes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    sns_destination: Optional[SnsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsDestination') }})
    
