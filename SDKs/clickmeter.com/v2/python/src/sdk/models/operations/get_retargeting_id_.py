from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRetargetingIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRetargetingIDRequest:
    path_params: GetRetargetingIDPathParams = field()
    

@dataclass
class GetRetargetingIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_retargeting_retargeting_script: Optional[shared.APICoreDtoRetargetingRetargetingScript] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
