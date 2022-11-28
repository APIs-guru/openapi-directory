from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TopicSearchResultItemAliasesTopicRelation:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation_type') }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_id') }})
    

@dataclass_json
@dataclass
class TopicSearchResultItemAliases:
    topic_relation: Optional[TopicSearchResultItemAliasesTopicRelation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_relation') }})
    

@dataclass_json
@dataclass
class TopicSearchResultItemRelatedTopicRelation:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation_type') }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_id') }})
    

@dataclass_json
@dataclass
class TopicSearchResultItemRelated:
    topic_relation: Optional[TopicSearchResultItemRelatedTopicRelation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_relation') }})
    

@dataclass_json
@dataclass
class TopicSearchResultItem:
    r"""TopicSearchResultItem
    Topic Search Result Item
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    curated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('curated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    featured: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    released: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('released') }})
    score: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    short_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_description') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    aliases: Optional[List[TopicSearchResultItemAliases]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_url') }})
    related: Optional[List[TopicSearchResultItemRelated]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    repository_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_count') }})
    text_matches: Optional[List[SearchResultTextMatches]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_matches') }})
    
