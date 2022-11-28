from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CollectionGetCollectionMetaPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionGetCollectionMetaRequest:
    path_params: CollectionGetCollectionMetaPathParams = field()
    

@dataclass
class CollectionGetCollectionMetaResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_collection_info: Optional[shared.BigOvenModelApi2CollectionInfo] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
