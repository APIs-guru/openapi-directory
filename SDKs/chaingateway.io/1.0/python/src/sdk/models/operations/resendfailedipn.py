from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResendFailedIpnHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    

@dataclass
class ResendFailedIpnRequest:
    headers: ResendFailedIpnHeaders = field(default=None)
    request: shared.ResendFailedIpnRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResendFailedIpnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    resend_failed_ipn: Optional[shared.ResendFailedIpn] = field(default=None)
    
