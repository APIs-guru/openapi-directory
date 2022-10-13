from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CollectionCollectionsQueryParams:
    test: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectionCollectionsRequest:
    query_params: CollectionCollectionsQueryParams = field(default=None)
    

@dataclass
class CollectionCollectionsResponse:
    big_oven_model_api2_collection_infos: Optional[List[shared.BigOvenModelApi2CollectionInfo]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
