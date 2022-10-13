from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListProgrammesAudioDescribedEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class ListProgrammesAvailabilityEnum(str, Enum):
    AVAILABLE = "available"
    PENDING = "pending"

class ListProgrammesAvailabilityEntityTypeEnum(str, Enum):
    EPISODE = "episode"
    CLIP = "clip"

class ListProgrammesAvailabilityTypeEnum(str, Enum):
    ONDEMAND = "ondemand"
    WEBCAST = "webcast"
    SIMULCAST = "simulcast"

class ListProgrammesDurationEnum(str, Enum):
    SHORT = "short"
    MEDIUM = "medium"
    LONG = "long"

class ListProgrammesEmbargoedEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"
    ONLY = "only"

class ListProgrammesEntityTypeEnum(str, Enum):
    BRAND = "brand"
    SERIES = "series"
    EPISODE = "episode"
    CLIP = "clip"

class ListProgrammesMediaTypeEnum(str, Enum):
    AUDIO = "audio"
    AUDIO_VIDEO = "audio_video"

class ListProgrammesMixinEnum(str, Enum):
    ALTERNATE_IMAGES = "alternate_images"
    ANCESTOR_TITLES = "ancestor_titles"
    AVAILABILITY = "availability"
    AVAILABLE_SIMULCASTS = "available_simulcasts"
    AVAILABLE_VERSIONS = "available_versions"
    AVAILABLE_WEBCASTS = "available_webcasts"
    CONTRIBUTIONS = "contributions"
    DURATION = "duration"
    GENRE_GROUPINGS = "genre_groupings"
    GENRE_GROUPS = "genre_groups"
    IMAGES = "images"
    IS_EMBEDDABLE = "is_embeddable"
    PREVIOUS_NEXT = "previous_next"
    PROGRAMME_TYPE = "programme_type"
    RELATED_LINKS = "related_links"
    TITLES = "titles"
    VERSIONS_AVAILABILITY = "versions_availability"

class ListProgrammesPaymentTypeEnum(str, Enum):
    FREE = "free"
    BBCSTORE = "bbcstore"
    USCANSVOD = "uscansvod"

class ListProgrammesSignedEnum(str, Enum):
    EXCLUSIVE = "exclusive"
    INCLUSIVE = "inclusive"
    EXCLUDE = "exclude"

class ListProgrammesSortEnum(str, Enum):
    GROUP_POSITION = "group_position"
    PID = "pid"
    POSITION = "position"
    PROMOTION = "promotion"
    RELEASE_DATE = "release_date"
    RELEVANCE = "relevance"
    SCHEDULED_START = "scheduled_start"
    STRICT_TITLE = "strict_title"
    TITLE = "title"
    TREE = "tree"

class ListProgrammesSortDirectionEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"

class ListProgrammesTleoEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass
class ListProgrammesQueryParams:
    audio_described: Optional[List[ListProgrammesAudioDescribedEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'audio_described', 'style': 'form', 'explode': True }})
    availability: Optional[List[ListProgrammesAvailabilityEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    availability_entity_type: Optional[List[ListProgrammesAvailabilityEntityTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'availability_entity_type', 'style': 'form', 'explode': True }})
    availability_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'availability_from', 'style': 'form', 'explode': True }})
    availability_type: Optional[List[ListProgrammesAvailabilityTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'availability_type', 'style': 'form', 'explode': True }})
    children_of: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'children_of', 'style': 'form', 'explode': True }})
    descendants_of: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'descendants_of', 'style': 'form', 'explode': True }})
    duration: Optional[List[ListProgrammesDurationEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    embargoed: Optional[ListProgrammesEmbargoedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embargoed', 'style': 'form', 'explode': True }})
    entity_type: Optional[List[ListProgrammesEntityTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'entity_type', 'style': 'form', 'explode': True }})
    format: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    genre: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genre', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    initial_letter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'initial_letter', 'style': 'form', 'explode': True }})
    initial_letter_end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'initial_letter_end', 'style': 'form', 'explode': True }})
    initial_letter_start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'initial_letter_start', 'style': 'form', 'explode': True }})
    initial_letter_strict: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'initial_letter_strict', 'style': 'form', 'explode': True }})
    item: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'item', 'style': 'form', 'explode': True }})
    master_brand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'master_brand', 'style': 'form', 'explode': True }})
    media_set: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'media_set', 'style': 'form', 'explode': True }})
    media_type: Optional[List[ListProgrammesMediaTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'media_type', 'style': 'form', 'explode': True }})
    mixin: Optional[List[ListProgrammesMixinEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    payment_type: Optional[List[ListProgrammesPaymentTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'payment_type', 'style': 'form', 'explode': True }})
    people: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'people', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    promoted_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'promoted_for', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    signed: Optional[List[ListProgrammesSignedEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'signed', 'style': 'form', 'explode': True }})
    sort: Optional[ListProgrammesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: Optional[ListProgrammesSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    tag_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag_name', 'style': 'form', 'explode': True }})
    tag_scheme: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag_scheme', 'style': 'form', 'explode': True }})
    tleo: Optional[List[ListProgrammesTleoEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'tleo', 'style': 'form', 'explode': True }})
    version: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class ListProgrammesRequest:
    query_params: ListProgrammesQueryParams = field(default=None)
    

@dataclass
class ListProgrammesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
