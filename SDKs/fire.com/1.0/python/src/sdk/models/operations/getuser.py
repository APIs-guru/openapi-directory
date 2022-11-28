from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field()
    

@dataclass
class GetUserResponse:
    content_type: str = field()
    status_code: int = field()
    oneusers_get_responses_200_content_application_1json_schema_items: Optional[shared.OneusersGetResponses200ContentApplication1jsonSchemaItems] = field(default=None)
    
