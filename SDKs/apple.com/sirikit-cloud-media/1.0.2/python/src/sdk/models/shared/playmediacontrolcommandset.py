from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayMediaControlCommandSet:
    bookmark_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookmarkTrack') }})
    dislike_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dislikeTrack') }})
    like_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likeTrack') }})
    next_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTrack') }})
    prefer_skip_backward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferSkipBackward') }})
    prefer_skip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferSkipForward') }})
    previous_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousTrack') }})
    seek_to_playback_position: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seekToPlaybackPosition') }})
    skip_backward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipBackward') }})
    skip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipForward') }})
    
