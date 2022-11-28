from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetGroupTopicByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    topic_id: str = field(metadata={'query_param': { 'field_name': 'topic_id', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetGroupTopicByID200ApplicationJSON:
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    topic: Optional[shared.Topic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclass
class GetGroupTopicByIDRequest:
    query_params: GetGroupTopicByIDQueryParams = field()
    

@dataclass
class GetGroupTopicByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_group_topic_by_id_200_application_json_object: Optional[GetGroupTopicByID200ApplicationJSON] = field(default=None)
    
