from dataclasses import dataclass, field



@dataclass
class SchemeCastLocalAuthorizationToken:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'cast-local-authorization-token' }})
    

@dataclass
class Security:
    cast_local_authorization_token: SchemeCastLocalAuthorizationToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
