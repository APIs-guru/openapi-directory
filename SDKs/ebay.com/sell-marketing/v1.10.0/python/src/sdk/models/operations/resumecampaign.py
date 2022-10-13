from dataclasses import dataclass, field



@dataclass
class ResumeCampaignPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumeCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResumeCampaignRequest:
    path_params: ResumeCampaignPathParams = field(default=None)
    security: ResumeCampaignSecurity = field(default=None)
    

@dataclass
class ResumeCampaignResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
