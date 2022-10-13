from dataclasses import dataclass, field



@dataclass
class GroupV2GetRecommendedGroupsPathParams:
    create_date_range: int = field(default=None, metadata={'path_param': { 'field_name': 'createDateRange', 'style': 'simple', 'explode': False }})
    group_type: int = field(default=None, metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetRecommendedGroupsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetRecommendedGroupsRequest:
    path_params: GroupV2GetRecommendedGroupsPathParams = field(default=None)
    security: GroupV2GetRecommendedGroupsSecurity = field(default=None)
    

@dataclass
class GroupV2GetRecommendedGroupsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
