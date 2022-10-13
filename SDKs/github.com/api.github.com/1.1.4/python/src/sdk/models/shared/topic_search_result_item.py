from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import search_result_text_matches


@dataclass_json
@dataclass
class TopicSearchResultItemAliasesTopicRelation:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    relation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relation_type' }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_id' }})
    

@dataclass_json
@dataclass
class TopicSearchResultItemAliases:
    topic_relation: Optional[TopicSearchResultItemAliasesTopicRelation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_relation' }})
    

@dataclass_json
@dataclass
class TopicSearchResultItemRelatedTopicRelation:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    relation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relation_type' }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_id' }})
    

@dataclass_json
@dataclass
class TopicSearchResultItemRelated:
    topic_relation: Optional[TopicSearchResultItemRelatedTopicRelation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_relation' }})
    

@dataclass_json
@dataclass
class TopicSearchResultItem:
    aliases: Optional[List[TopicSearchResultItemAliases]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    curated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    featured: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured' }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    related: Optional[List[TopicSearchResultItemRelated]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    released: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'released' }})
    repository_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_count' }})
    score: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    short_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_description' }})
    text_matches: Optional[List[search_result_text_matches.SearchResultTextMatches]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_matches' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
