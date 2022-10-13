from dataclasses import dataclass, field



@dataclass
class DeleteAdPathParams:
    ad_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAdRequest:
    path_params: DeleteAdPathParams = field(default=None)
    security: DeleteAdSecurity = field(default=None)
    

@dataclass
class DeleteAdResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
