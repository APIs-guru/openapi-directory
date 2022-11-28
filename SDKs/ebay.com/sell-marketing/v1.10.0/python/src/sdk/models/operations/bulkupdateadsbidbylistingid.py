from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class BulkUpdateAdsBidByListingIDPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkUpdateAdsBidByListingIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkUpdateAdsBidByListingIDRequest:
    path_params: BulkUpdateAdsBidByListingIDPathParams = field()
    request: shared.BulkCreateAdRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkUpdateAdsBidByListingIDSecurity = field()
    

@dataclass
class BulkUpdateAdsBidByListingIDResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_ad_response: Optional[shared.BulkAdResponse] = field(default=None)
    
