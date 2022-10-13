from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteOrdersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrdersIDSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteOrdersIDRequest:
    path_params: DeleteOrdersIDPathParams = field(default=None)
    security: DeleteOrdersIDSecurity = field(default=None)
    

@dataclass
class DeleteOrdersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema] = field(default=None)
    
