from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CloneCampaignPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloneCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloneCampaignRequest:
    path_params: CloneCampaignPathParams = field(default=None)
    request: shared.CloneCampaignRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CloneCampaignSecurity = field(default=None)
    

@dataclass
class CloneCampaignResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    clone_campaign_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
