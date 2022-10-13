from dataclasses import dataclass, field



@dataclass
class DeleteBankTransferBatchPaymentPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBankTransferBatchPaymentRequest:
    path_params: DeleteBankTransferBatchPaymentPathParams = field(default=None)
    

@dataclass
class DeleteBankTransferBatchPaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
