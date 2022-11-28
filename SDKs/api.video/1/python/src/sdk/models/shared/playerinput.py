from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Playerinput:
    background_bottom: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundBottom') }})
    background_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundText') }})
    background_top: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundTop') }})
    enable_api: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableApi') }})
    enable_controls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableControls') }})
    force_autoplay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceAutoplay') }})
    force_loop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceLoop') }})
    hide_title: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTitle') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_hover: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkHover') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    track_background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackBackground') }})
    track_played: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackPlayed') }})
    track_unplayed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackUnplayed') }})
    
