from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentRequest:
    request: SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentResponse:
    api_response_similarity: Optional[shared.APIResponseSimilarity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    src_searchly_api_v1_controllers_similarity_by_content_default_application_text_string: Optional[str] = field(default=None)
    
