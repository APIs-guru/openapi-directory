from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SrcSearchlyAPIV1ControllersSimilarityBySongQueryParams:
    song_id: int = field(metadata={'query_param': { 'field_name': 'song_id', 'style': 'form', 'explode': True }})
    

@dataclass
class SrcSearchlyAPIV1ControllersSimilarityBySongRequest:
    query_params: SrcSearchlyAPIV1ControllersSimilarityBySongQueryParams = field()
    

@dataclass
class SrcSearchlyAPIV1ControllersSimilarityBySongResponse:
    content_type: str = field()
    status_code: int = field()
    api_response_similarity: Optional[shared.APIResponseSimilarity] = field(default=None)
    src_searchly_api_v1_controllers_similarity_by_song_default_application_text_string: Optional[str] = field(default=None)
    
