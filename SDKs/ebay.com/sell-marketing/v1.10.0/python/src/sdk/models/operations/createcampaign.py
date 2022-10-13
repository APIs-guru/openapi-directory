from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCampaignRequest:
    request: shared.CreateCampaignRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCampaignSecurity = field(default=None)
    

@dataclass
class CreateCampaignResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_campaign_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
