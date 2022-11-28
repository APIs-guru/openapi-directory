from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiveStream:
    assets: Optional[LiveStreamAssets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    broadcasting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadcasting') }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveStreamId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    stream_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamKey') }})
    
