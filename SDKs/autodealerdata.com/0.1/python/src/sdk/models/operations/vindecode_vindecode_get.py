from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VinDecodeVinDecodeGetQueryParams:
    include_recall: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeRecall', 'style': 'form', 'explode': True }})
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    pass_empty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'passEmpty', 'style': 'form', 'explode': True }})
    vin: str = field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    

@dataclass
class VinDecodeVinDecodeGetRequest:
    query_params: VinDecodeVinDecodeGetQueryParams = field(default=None)
    

@dataclass
class VinDecodeVinDecodeGetResponse:
    content_type: str = field(default=None)
    generic_response: Optional[shared.GenericResponse] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
