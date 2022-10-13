from dataclasses import dataclass, field



@dataclass
class CancelMandateByUUIDPathParams:
    mandate_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelMandateByUUIDRequest:
    path_params: CancelMandateByUUIDPathParams = field(default=None)
    

@dataclass
class CancelMandateByUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
