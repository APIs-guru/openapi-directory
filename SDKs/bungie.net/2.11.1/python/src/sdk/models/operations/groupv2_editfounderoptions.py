from dataclasses import dataclass, field



@dataclass
class GroupV2EditFounderOptionsPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditFounderOptionsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditFounderOptionsRequest:
    path_params: GroupV2EditFounderOptionsPathParams = field(default=None)
    security: GroupV2EditFounderOptionsSecurity = field(default=None)
    

@dataclass
class GroupV2EditFounderOptionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
