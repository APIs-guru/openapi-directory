from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2EditFounderOptionsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditFounderOptionsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditFounderOptionsRequest:
    path_params: GroupV2EditFounderOptionsPathParams = field()
    security: GroupV2EditFounderOptionsSecurity = field()
    

@dataclass
class GroupV2EditFounderOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
