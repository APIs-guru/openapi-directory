from dataclasses import dataclass, field



@dataclass
class DeleteCampaignPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteCampaignRequest:
    path_params: DeleteCampaignPathParams = field(default=None)
    security: DeleteCampaignSecurity = field(default=None)
    

@dataclass
class DeleteCampaignResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
