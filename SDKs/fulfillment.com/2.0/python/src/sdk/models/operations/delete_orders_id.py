from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteOrdersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrdersIDSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteOrdersIDRequest:
    path_params: DeleteOrdersIDPathParams = field()
    security: DeleteOrdersIDSecurity = field()
    

@dataclass
class DeleteOrdersIDResponse:
    content_type: str = field()
    status_code: int = field()
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema] = field(default=None)
    
