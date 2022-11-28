from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CloneCampaignPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloneCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloneCampaignRequest:
    path_params: CloneCampaignPathParams = field()
    request: shared.CloneCampaignRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CloneCampaignSecurity = field()
    

@dataclass
class CloneCampaignResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    clone_campaign_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
