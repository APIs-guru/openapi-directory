from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIResponseSimilarityResponseSimilarityList:
    artist_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist_name' }})
    artist_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    index_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index_id' }})
    lyrics: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lyrics' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    song_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'song_name' }})
    song_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'song_url' }})
    

@dataclass_json
@dataclass
class APIResponseSimilarityResponse:
    similarity_list: Optional[List[APIResponseSimilarityResponseSimilarityList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'similarity_list' }})
    

@dataclass_json
@dataclass
class APIResponseSimilarity:
    error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    response: Optional[APIResponseSimilarityResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    
