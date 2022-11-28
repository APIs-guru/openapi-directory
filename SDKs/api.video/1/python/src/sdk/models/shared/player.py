from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayerAssets:
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    

@dataclass_json
@dataclass
class Player:
    assets: Optional[PlayerAssets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    background_bottom: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundBottom') }})
    background_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundText') }})
    background_top: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundTop') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_api: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableApi') }})
    enable_controls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableControls') }})
    force_autoplay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceAutoplay') }})
    force_loop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceLoop') }})
    hide_title: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTitle') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_active: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkActive') }})
    link_hover: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkHover') }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    shape_aspect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeAspect') }})
    shape_background_bottom: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeBackgroundBottom') }})
    shape_background_top: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeBackgroundTop') }})
    shape_margin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeMargin') }})
    shape_radius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeRadius') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    track_background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackBackground') }})
    track_played: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackPlayed') }})
    track_unplayed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackUnplayed') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
