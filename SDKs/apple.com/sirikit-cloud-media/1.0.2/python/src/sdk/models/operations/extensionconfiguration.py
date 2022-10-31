from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ExtensionConfigurationHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    cache_control: str = field(default=None, metadata={'header': { 'field_name': 'Cache-Control', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    request_timeout: float = field(default=None, metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = field(default=None, metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtensionConfigurationRequest:
    headers: ExtensionConfigurationHeaders = field(default=None)
    

@dataclass
class ExtensionConfigurationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
