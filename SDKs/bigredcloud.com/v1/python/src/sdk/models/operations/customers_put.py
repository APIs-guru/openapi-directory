from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CustomersPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersPutRequest:
    path_params: CustomersPutPathParams = field()
    request: shared.CustomerDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CustomersPutResponse:
    content_type: str = field()
    status_code: int = field()
    customers_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
