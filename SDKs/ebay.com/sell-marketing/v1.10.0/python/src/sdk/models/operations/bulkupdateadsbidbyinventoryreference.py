from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class BulkUpdateAdsBidByInventoryReferencePathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkUpdateAdsBidByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkUpdateAdsBidByInventoryReferenceRequest:
    path_params: BulkUpdateAdsBidByInventoryReferencePathParams = field()
    request: shared.BulkCreateAdsByInventoryReferenceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkUpdateAdsBidByInventoryReferenceSecurity = field()
    

@dataclass
class BulkUpdateAdsBidByInventoryReferenceResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_create_ads_by_inventory_reference_response: Optional[shared.BulkCreateAdsByInventoryReferenceResponse] = field(default=None)
    
