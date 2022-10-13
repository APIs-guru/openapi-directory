from dataclasses import dataclass, field



@dataclass
class ActivateMandatePathParams:
    mandate_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivateMandateRequest:
    path_params: ActivateMandatePathParams = field(default=None)
    

@dataclass
class ActivateMandateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
