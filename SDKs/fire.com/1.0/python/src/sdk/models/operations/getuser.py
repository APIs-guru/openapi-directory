from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field(default=None)
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneusers_get_responses_200_content_application_1json_schema_items: Optional[shared.OneusersGetResponses200ContentApplication1jsonSchemaItems] = field(default=None)
    
