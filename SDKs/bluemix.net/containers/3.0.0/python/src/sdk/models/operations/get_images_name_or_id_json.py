from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetImagesNameOrIDJSONPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagesNameOrIDJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetImagesNameOrIDJSONRequest:
    path_params: GetImagesNameOrIDJSONPathParams = field(default=None)
    headers: GetImagesNameOrIDJSONHeaders = field(default=None)
    

@dataclass
class GetImagesNameOrIDJSONResponse:
    content_type: str = field(default=None)
    image_detail: Optional[shared.ImageDetail] = field(default=None)
    status_code: int = field(default=None)
    
