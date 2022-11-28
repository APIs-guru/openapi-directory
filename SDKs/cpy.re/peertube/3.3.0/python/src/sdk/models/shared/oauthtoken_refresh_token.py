from dataclasses import dataclass, field
from enum import Enum

class OAuthTokenRefreshTokenGrantTypeEnum(str, Enum):
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"


@dataclass
class OAuthTokenRefreshToken:
    client_id: str = field(metadata={'form': { 'field_name': 'client_id' }})
    client_secret: str = field(metadata={'form': { 'field_name': 'client_secret' }})
    grant_type: OAuthTokenRefreshTokenGrantTypeEnum = field(metadata={'form': { 'field_name': 'grant_type' }})
    refresh_token: str = field(metadata={'form': { 'field_name': 'refresh_token' }})
    
