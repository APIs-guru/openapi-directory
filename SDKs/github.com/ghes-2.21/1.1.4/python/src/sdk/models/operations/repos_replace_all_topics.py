from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposReplaceAllTopicsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposReplaceAllTopicsRequestBody:
    names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    

@dataclass_json
@dataclass
class ReposReplaceAllTopics415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposReplaceAllTopicsRequest:
    path_params: ReposReplaceAllTopicsPathParams = field()
    request: Optional[ReposReplaceAllTopicsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposReplaceAllTopicsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    repos_replace_all_topics_415_application_json_object: Optional[ReposReplaceAllTopics415ApplicationJSON] = field(default=None)
    topic: Optional[shared.Topic] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
