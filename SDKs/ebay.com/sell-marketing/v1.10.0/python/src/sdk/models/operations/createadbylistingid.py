from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateAdByListingIDPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdByListingIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAdByListingIDRequest:
    path_params: CreateAdByListingIDPathParams = field(default=None)
    request: shared.CreateAdRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAdByListingIDSecurity = field(default=None)
    

@dataclass
class CreateAdByListingIDResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_ad_by_listing_id_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
