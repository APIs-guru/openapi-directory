from dataclasses import dataclass, field



@dataclass
class RejectDirectDebitPathParams:
    direct_debit_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'directDebitUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RejectDirectDebitRequest:
    path_params: RejectDirectDebitPathParams = field(default=None)
    

@dataclass
class RejectDirectDebitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
