from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ExtensionConfigurationHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    cache_control: str = field(metadata={'header': { 'field_name': 'Cache-Control', 'style': 'simple', 'explode': False }})
    request_timeout: float = field(metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtensionConfigurationRequest:
    headers: ExtensionConfigurationHeaders = field()
    

@dataclass
class ExtensionConfigurationResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
