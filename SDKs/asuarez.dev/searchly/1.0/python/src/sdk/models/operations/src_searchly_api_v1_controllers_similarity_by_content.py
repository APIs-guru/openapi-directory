from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentRequest:
    request: SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentResponse:
    content_type: str = field()
    status_code: int = field()
    api_response_similarity: Optional[shared.APIResponseSimilarity] = field(default=None)
    src_searchly_api_v1_controllers_similarity_by_content_default_application_text_string: Optional[str] = field(default=None)
    
