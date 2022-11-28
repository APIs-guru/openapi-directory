from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintPathParams:
    fingerprint: str = field(metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintRequest:
    path_params: GetProjectUsernameProjectCheckoutKeyFingerprintPathParams = field()
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintResponse:
    content_type: str = field()
    status_code: int = field()
    key: Optional[shared.Key] = field(default=None)
    
