from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCampaignRequest:
    request: shared.CreateCampaignRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCampaignSecurity = field()
    

@dataclass
class CreateCampaignResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    create_campaign_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
