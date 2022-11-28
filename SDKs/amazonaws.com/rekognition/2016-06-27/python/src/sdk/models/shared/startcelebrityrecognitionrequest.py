from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartCelebrityRecognitionRequest:
    video: Video = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Video') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTag') }})
    notification_channel: Optional[NotificationChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationChannel') }})
    
