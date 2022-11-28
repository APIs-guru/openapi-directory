from dataclasses import dataclass, field
from enum import Enum

class OAuthTokenPasswordGrantTypeEnum(str, Enum):
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"


@dataclass
class OAuthTokenPassword:
    client_id: str = field(metadata={'form': { 'field_name': 'client_id' }})
    client_secret: str = field(metadata={'form': { 'field_name': 'client_secret' }})
    grant_type: OAuthTokenPasswordGrantTypeEnum = field(metadata={'form': { 'field_name': 'grant_type' }})
    password: str = field(metadata={'form': { 'field_name': 'password' }})
    username: str = field(metadata={'form': { 'field_name': 'username' }})
    
