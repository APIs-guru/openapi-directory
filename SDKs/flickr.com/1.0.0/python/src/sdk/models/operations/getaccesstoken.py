from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAccessTokenQueryParams:
    oauth_consumer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_consumer_key', 'style': 'form', 'explode': True }})
    oauth_nonce: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_nonce', 'style': 'form', 'explode': True }})
    oauth_signature: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_signature', 'style': 'form', 'explode': True }})
    oauth_signature_method: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_signature_method', 'style': 'form', 'explode': True }})
    oauth_timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_timestamp', 'style': 'form', 'explode': True }})
    oauth_token: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    oauth_verifier: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_verifier', 'style': 'form', 'explode': True }})
    oauth_version: str = field(default=None, metadata={'query_param': { 'field_name': 'oauth_version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccessTokenRequest:
    query_params: GetAccessTokenQueryParams = field(default=None)
    

@dataclass
class GetAccessTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_access_token_200_application_json_string: Optional[str] = field(default=None)
    
