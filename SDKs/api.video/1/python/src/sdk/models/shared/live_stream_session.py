from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiveStreamSession:
    client: Optional[LiveStreamSessionClient] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    device: Optional[LiveStreamSessionDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    location: Optional[LiveStreamSessionLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    os: Optional[VideoSessionOs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    referrer: Optional[LiveStreamSessionReferrer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    session: Optional[LiveStreamSessionSession] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    
