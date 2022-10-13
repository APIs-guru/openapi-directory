from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayMediaControlCommandSet:
    bookmark_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookmarkTrack' }})
    dislike_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dislikeTrack' }})
    like_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likeTrack' }})
    next_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTrack' }})
    prefer_skip_backward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferSkipBackward' }})
    prefer_skip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferSkipForward' }})
    previous_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousTrack' }})
    seek_to_playback_position: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seekToPlaybackPosition' }})
    skip_backward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipBackward' }})
    skip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipForward' }})
    
