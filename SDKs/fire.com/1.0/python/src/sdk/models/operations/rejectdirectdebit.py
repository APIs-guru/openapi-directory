from dataclasses import dataclass, field



@dataclass
class RejectDirectDebitPathParams:
    direct_debit_uuid: str = field(metadata={'path_param': { 'field_name': 'directDebitUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RejectDirectDebitRequest:
    path_params: RejectDirectDebitPathParams = field()
    

@dataclass
class RejectDirectDebitResponse:
    content_type: str = field()
    status_code: int = field()
    
