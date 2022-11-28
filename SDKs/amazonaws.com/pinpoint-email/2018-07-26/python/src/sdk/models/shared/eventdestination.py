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
    In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
    """
    
    matching_event_types: List[EventTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchingEventTypes') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    cloud_watch_destination: Optional[CloudWatchDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchDestination') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    kinesis_firehose_destination: Optional[KinesisFirehoseDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseDestination') }})
    pinpoint_destination: Optional[PinpointDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PinpointDestination') }})
    sns_destination: Optional[SnsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsDestination') }})
    
