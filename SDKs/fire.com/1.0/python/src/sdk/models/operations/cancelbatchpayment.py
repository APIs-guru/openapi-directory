from dataclasses import dataclass, field



@dataclass
class CancelBatchPaymentPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelBatchPaymentRequest:
    path_params: CancelBatchPaymentPathParams = field(default=None)
    

@dataclass
class CancelBatchPaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
