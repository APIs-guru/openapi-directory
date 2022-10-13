from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRetargetingIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRetargetingIDRequest:
    path_params: GetRetargetingIDPathParams = field(default=None)
    

@dataclass
class GetRetargetingIDResponse:
    api_core_dto_retargeting_retargeting_script: Optional[shared.APICoreDtoRetargetingRetargetingScript] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
