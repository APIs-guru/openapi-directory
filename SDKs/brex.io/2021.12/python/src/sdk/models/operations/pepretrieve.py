from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class PepRetrievePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PepRetrieveAcceptEnum(str, Enum):
    APPLICATION_JSON = "application/json"
    APPLICATION_PDF = "application/pdf"


@dataclass
class PepRetrieveHeaders:
    accept: Optional[PepRetrieveAcceptEnum] = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class PepRetrieveSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PepRetrieveRequest:
    path_params: PepRetrievePathParams = field(default=None)
    headers: PepRetrieveHeaders = field(default=None)
    security: PepRetrieveSecurity = field(default=None)
    

@dataclass
class PepRetrieveResponse:
    content_type: str = field(default=None)
    pep_retrieve_200_application_json_any: Optional[Any] = field(default=None)
    pep_retrieve_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
