from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResendFailedIpnHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResendFailedIpnRequest:
    headers: ResendFailedIpnHeaders = field()
    request: shared.ResendFailedIpnRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResendFailedIpnResponse:
    content_type: str = field()
    status_code: int = field()
    resend_failed_ipn: Optional[shared.ResendFailedIpn] = field(default=None)
    
