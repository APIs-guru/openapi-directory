from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemsBatchBankTransferPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemsBatchBankTransferQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemsBatchBankTransferRequest:
    path_params: GetItemsBatchBankTransferPathParams = field(default=None)
    query_params: GetItemsBatchBankTransferQueryParams = field(default=None)
    

@dataclass
class GetItemsBatchBankTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    onebatches_get_responses_200_content_application_1json_schema: Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchema] = field(default=None)
    
