from dataclasses import dataclass, field



@dataclass
class CancelBatchPaymentPathParams:
    batch_uuid: str = field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelBatchPaymentRequest:
    path_params: CancelBatchPaymentPathParams = field()
    

@dataclass
class CancelBatchPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    
