from dataclasses import dataclass, field



@dataclass
class DeleteBankTransferBatchPaymentPathParams:
    batch_uuid: str = field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBankTransferBatchPaymentRequest:
    path_params: DeleteBankTransferBatchPaymentPathParams = field()
    

@dataclass
class DeleteBankTransferBatchPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    
