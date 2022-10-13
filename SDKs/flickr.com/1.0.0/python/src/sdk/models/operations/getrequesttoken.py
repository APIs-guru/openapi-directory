from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRequestTokenQueryParams:
    oauth_callback: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_callback', 'style': 'form', 'explode': True }})
    oauth_consumer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_consumer_key', 'style': 'form', 'explode': True }})
    oauth_nonce: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_nonce', 'style': 'form', 'explode': True }})
    oauth_signature: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_signature', 'style': 'form', 'explode': True }})
    oauth_signature_method: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_signature_method', 'style': 'form', 'explode': True }})
    oauth_timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_timestamp', 'style': 'form', 'explode': True }})
    oauth_version: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequestTokenRequest:
    query_params: GetRequestTokenQueryParams = field(default=None)
    

@dataclass
class GetRequestTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_request_token_200_application_json_string: Optional[str] = field(default=None)
    
