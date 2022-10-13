from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintPathParams:
    fingerprint: str = field(default=None, metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintRequest:
    path_params: GetProjectUsernameProjectCheckoutKeyFingerprintPathParams = field(default=None)
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintResponse:
    content_type: str = field(default=None)
    key: Optional[shared.Key] = field(default=None)
    status_code: int = field(default=None)
    
