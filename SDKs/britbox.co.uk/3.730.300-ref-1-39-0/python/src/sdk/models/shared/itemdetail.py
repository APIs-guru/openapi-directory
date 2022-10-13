from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import classificationsummary
from . import credit
from . import itemcustommetadata
from . import itemlist
from . import offer
from . import itemdetail
from . import itemlist
from . import itemdetail
from . import theme
from . import itemsummary

class ItemDetailTypeEnum(str, Enum):
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
class ItemDetail:
    advisory_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advisoryText' }})
    available_episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableEpisodeCount' }})
    available_season_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableSeasonCount' }})
    average_user_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageUserRating' }})
    badge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badge' }})
    channel_short_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelShortCode' }})
    classification: Optional[classificationsummary.ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    contextual_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextualTitle' }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    credits: Optional[List[credit.Credit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits' }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    custom_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customId' }})
    custom_metadata: Optional[List[itemcustommetadata.ItemCustomMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetadata' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributor' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodeCount' }})
    episode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodeName' }})
    episode_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodeNumber' }})
    episodes: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodes' }})
    event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    genre_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genrePaths' }})
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genres' }})
    has_closed_captions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasClosedCaptions' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    offers: Optional[List[offer.Offer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offers' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    release_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseYear' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    season: Optional[itemdetail.ItemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    season_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonId' }})
    season_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonNumber' }})
    seasons: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasons' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    show: Optional[itemdetail.ItemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show' }})
    show_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showId' }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showTitle' }})
    subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    tagline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagline' }})
    themes: Optional[List[theme.Theme]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themes' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_user_ratings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalUserRatings' }})
    trailers: Optional[List[itemsummary.ItemSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailers' }})
    type: ItemDetailTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    venue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venue' }})
    watch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchPath' }})
    
