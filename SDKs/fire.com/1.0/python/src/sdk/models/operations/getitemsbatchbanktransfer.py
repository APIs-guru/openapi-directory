from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemsBatchBankTransferPathParams:
    batch_uuid: str = field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemsBatchBankTransferQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemsBatchBankTransferRequest:
    path_params: GetItemsBatchBankTransferPathParams = field()
    query_params: GetItemsBatchBankTransferQueryParams = field()
    

@dataclass
class GetItemsBatchBankTransferResponse:
    content_type: str = field()
    status_code: int = field()
    onebatches_get_responses_200_content_application_1json_schema: Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchema] = field(default=None)
    
