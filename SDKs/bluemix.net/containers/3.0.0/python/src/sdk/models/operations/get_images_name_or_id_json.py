from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetImagesNameOrIDJSONPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagesNameOrIDJSONHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImagesNameOrIDJSONRequest:
    headers: GetImagesNameOrIDJSONHeaders = field()
    path_params: GetImagesNameOrIDJSONPathParams = field()
    

@dataclass
class GetImagesNameOrIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    image_detail: Optional[shared.ImageDetail] = field(default=None)
    
