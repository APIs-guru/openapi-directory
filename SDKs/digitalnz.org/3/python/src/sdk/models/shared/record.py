from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RecordCategoryEnum(str, Enum):
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

class RecordCopyrightEnum(str, Enum):
    ALL_RIGHTS_RESERVED = "All rights reserved"
    SOME_RIGHTS_RESERVED = "Some rights reserved"
    NO_KNOWN_COPYRIGHT_RESTRICTIONS = "No known copyright restrictions"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class RecordLocations:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    placename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placename') }})
    
class RecordUsageEnum(str, Enum):
    ALL_RIGHTS_RESERVED = "All rights reserved"
    SHARE = "Share"
    MODIFY = "Modify"
    USE_COMMERCIALLY = "Use commercially"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class Record:
    r"""Record
    *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record. 
    
    """
    
    category: Optional[List[RecordCategoryEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    collection: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    collection_title: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_title') }})
    content_partner: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_partner') }})
    copyright: Optional[List[RecordCopyrightEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    date_: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    dc_identifier: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dc_identifier') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_collection') }})
    display_content_partner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_content_partner') }})
    display_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_date') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    landing_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landing_url') }})
    large_thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_thumbnail_url') }})
    locations: Optional[List[RecordLocations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    primary_collection: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_collection') }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights') }})
    rights_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights_url') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_url') }})
    subject: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail_url') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    usage: Optional[List[RecordUsageEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
