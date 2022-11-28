from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateAdByListingIDPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdByListingIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAdByListingIDRequest:
    path_params: CreateAdByListingIDPathParams = field()
    request: shared.CreateAdRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAdByListingIDSecurity = field()
    

@dataclass
class CreateAdByListingIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    create_ad_by_listing_id_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
