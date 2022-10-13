from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemsBatchInternalTrasnferPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemsBatchInternalTrasnferQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemsBatchInternalTrasnferRequest:
    path_params: GetItemsBatchInternalTrasnferPathParams = field(default=None)
    query_params: GetItemsBatchInternalTrasnferQueryParams = field(default=None)
    

@dataclass
class GetItemsBatchInternalTrasnferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    onebatches_get_responses_200_content_application_1json_schema: Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchema] = field(default=None)
    
