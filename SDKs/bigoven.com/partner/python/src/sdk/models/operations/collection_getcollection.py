from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CollectionGetCollectionPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionGetCollectionQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    session_for_logging: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sessionForLogging', 'style': 'form', 'explode': True }})
    test: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectionGetCollectionRequest:
    path_params: CollectionGetCollectionPathParams = field()
    query_params: CollectionGetCollectionQueryParams = field()
    

@dataclass
class CollectionGetCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_recipe_search_result: Optional[shared.BigOvenModelApi2RecipeSearchResult] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
