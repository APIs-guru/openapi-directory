from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CollectionCollectionsQueryParams:
    test: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectionCollectionsRequest:
    query_params: CollectionCollectionsQueryParams = field()
    

@dataclass
class CollectionCollectionsResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_collection_infos: Optional[List[shared.BigOvenModelApi2CollectionInfo]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
