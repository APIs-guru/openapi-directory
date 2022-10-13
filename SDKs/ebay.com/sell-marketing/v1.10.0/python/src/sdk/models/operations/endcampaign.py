from dataclasses import dataclass, field



@dataclass
class EndCampaignPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndCampaignRequest:
    path_params: EndCampaignPathParams = field(default=None)
    security: EndCampaignSecurity = field(default=None)
    

@dataclass
class EndCampaignResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
