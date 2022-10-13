from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ConnecttoWiFiNetworkRequest:
    request: shared.ConnecttoWiFiNetworkRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConnecttoWiFiNetworkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
