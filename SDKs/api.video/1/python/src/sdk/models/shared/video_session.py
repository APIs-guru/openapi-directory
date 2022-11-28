from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoSession:
    client: Optional[VideoSessionClient] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    device: Optional[VideoSessionDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    location: Optional[VideoSessionLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    os: Optional[VideoSessionOs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    referrer: Optional[VideoSessionReferrer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    session: Optional[VideoSessionSession] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    
