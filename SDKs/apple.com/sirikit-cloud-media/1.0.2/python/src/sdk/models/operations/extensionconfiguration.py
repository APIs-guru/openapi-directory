from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ExtensionConfigurationHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    cache_control: str = field(default=None, metadata={'header': { 'field_name': 'Cache-Control' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    request_timeout: float = field(default=None, metadata={'header': { 'field_name': 'Request-Timeout' }})
    user_agent: str = field(default=None, metadata={'header': { 'field_name': 'User-Agent' }})
    x_applecloudextension_retry_count: Optional[float] = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count' }})
    x_applecloudextension_session_id: str = field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-session-id' }})
    

@dataclass
class ExtensionConfigurationRequest:
    headers: ExtensionConfigurationHeaders = field(default=None)
    

@dataclass
class ExtensionConfigurationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
