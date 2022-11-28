from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ItemSummaryTypeEnum(str, Enum):
    MOVIE = "movie"
    SHOW = "show"
    SEASON = "season"
    EPISODE = "episode"
    PROGRAM = "program"
    LINK = "link"
    TRAILER = "trailer"
    CHANNEL = "channel"
    CUSTOM_ASSET = "customAsset"


@dataclass_json
@dataclass
class ItemSummary:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: ItemSummaryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    advisory_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advisoryText') }})
    available_episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableEpisodeCount') }})
    available_season_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableSeasonCount') }})
    average_user_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageUserRating') }})
    badge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badge') }})
    channel_short_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelShortCode') }})
    classification: Optional[ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    contextual_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextualTitle') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    custom_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customId') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodeCount') }})
    episode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodeName') }})
    episode_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodeNumber') }})
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    has_closed_captions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasClosedCaptions') }})
    images: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    offers: Optional[List[Offer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers') }})
    release_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseYear') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    season_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonId') }})
    season_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonNumber') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    show_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showId') }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showTitle') }})
    subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    tagline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagline') }})
    themes: Optional[List[Theme]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themes') }})
    watch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchPath') }})
    
