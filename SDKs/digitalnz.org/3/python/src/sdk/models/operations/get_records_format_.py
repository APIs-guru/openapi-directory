from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetRecordsFormatPathParams:
    format: shared.FormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    
class GetRecordsFormatAndCategoryEnum(str, Enum):
    NEWSPAPERS = "Newspapers"
    IMAGES = "Images"
    BOOKS = "Books"
    ARTICLES = "Articles"
    JOURNALS = "Journals"
    ARCHIVES = "Archives"
    AUDIO = "Audio"
    OTHER = "Other"
    MANUSCRIPTS = "Manuscripts"
    REFERENCE_SOURCES = "Reference sources"
    RESEARCH_PAPERS = "Research papers"
    VIDEOS = "Videos"
    MUSIC_SCORE = "Music Score"
    GROUPS = "Groups"
    DATA = "Data"
    WEBSITES = "Websites"
    SETS = "Sets"

class GetRecordsFormatAndHasLargeThumbnailURLEnum(str, Enum):
    Y = "Y"

class GetRecordsFormatAndUsageEnum(str, Enum):
    SHARE = "Share"
    MODIFY = "Modify"
    USE_COMMERCIALLY = "Use commercially"
    ALL_RIGHTS_RESERVED = "All rights reserved"
    UNKNOWN = "Unknown"

class GetRecordsFormatDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetRecordsFormatFacetsEnum(str, Enum):
    CATEGORY = "category"
    CONTENT_PARTNER = "content_partner"
    DISPLAY_COLLECTION = "display_collection"
    COLLECTION = "collection"
    CREATOR = "creator"
    PLACENAME = "placename"
    DATE = "date"
    YEAR = "year"
    DECADE = "decade"
    CENTURY = "century"
    LANGUAGE = "language"
    RIGHTS = "rights"
    USAGE = "usage"
    COPYRIGHT = "copyright"
    SUBJECT = "subject"
    FORMAT = "format"
    DC_TYPE = "dc_type"

class GetRecordsFormatSortEnum(str, Enum):
    SYNDICATION_DATE = "syndication_date"
    DATE = "date"


@dataclass
class GetRecordsFormatQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    and_category_: Optional[GetRecordsFormatAndCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'and[category][]', 'style': 'form', 'explode': True }})
    and_century_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[century]', 'style': 'form', 'explode': True }})
    and_collection_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[collection][]', 'style': 'form', 'explode': True }})
    and_content_partner_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[content_partner][]', 'style': 'form', 'explode': True }})
    and_creator_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[creator][]', 'style': 'form', 'explode': True }})
    and_date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[date]', 'style': 'form', 'explode': True }})
    and_dc_type_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[dc_type][]', 'style': 'form', 'explode': True }})
    and_decade_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[decade]', 'style': 'form', 'explode': True }})
    and_format_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[format][]', 'style': 'form', 'explode': True }})
    and_has_large_thumbnail_url_: Optional[GetRecordsFormatAndHasLargeThumbnailURLEnum] = field(default=None, metadata={'query_param': { 'field_name': 'and[has_large_thumbnail_url]', 'style': 'form', 'explode': True }})
    and_has_lat_lng_: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'and[has_lat_lng]', 'style': 'form', 'explode': True }})
    and_is_commercial_use_: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'and[is_commercial_use]', 'style': 'form', 'explode': True }})
    and_or_filter_field_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[or][{filter_field}][]', 'style': 'form', 'explode': True }})
    and_placename_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[placename][]', 'style': 'form', 'explode': True }})
    and_primary_collection_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[primary_collection][]', 'style': 'form', 'explode': True }})
    and_subject_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[subject][]', 'style': 'form', 'explode': True }})
    and_title_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[title][]', 'style': 'form', 'explode': True }})
    and_usage_: Optional[GetRecordsFormatAndUsageEnum] = field(default=None, metadata={'query_param': { 'field_name': 'and[usage][]', 'style': 'form', 'explode': True }})
    and_year_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'and[year]', 'style': 'form', 'explode': True }})
    direction: Optional[GetRecordsFormatDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    exclude_filters_from_facets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_filters_from_facets', 'style': 'form', 'explode': True }})
    facets: Optional[List[GetRecordsFormatFacetsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': False }})
    facets_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'facets_page', 'style': 'form', 'explode': True }})
    facets_per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'facets_per_page', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    geo_bbox: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'geo_bbox', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetRecordsFormatSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    without_filter_field_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'without[{filter_field}]', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetRecordsFormat200ApplicationJSON:
    facets: Optional[dict[str, dict[str, int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    records: Optional[List[shared.Record]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_url') }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    

@dataclass
class GetRecordsFormatRequest:
    path_params: GetRecordsFormatPathParams = field()
    query_params: GetRecordsFormatQueryParams = field()
    

@dataclass
class GetRecordsFormatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_records_format_200_application_json_object: Optional[GetRecordsFormat200ApplicationJSON] = field(default=None)
    get_records_format_400_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_records_format_403_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
