from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindCampaignByAdReferenceQueryParams:
    inventory_reference_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inventory_reference_id', 'style': 'form', 'explode': True }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inventory_reference_type', 'style': 'form', 'explode': True }})
    listing_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'listing_id', 'style': 'form', 'explode': True }})
    

@dataclass
class FindCampaignByAdReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FindCampaignByAdReferenceRequest:
    query_params: FindCampaignByAdReferenceQueryParams = field()
    security: FindCampaignByAdReferenceSecurity = field()
    

@dataclass
class FindCampaignByAdReferenceResponse:
    content_type: str = field()
    status_code: int = field()
    campaigns: Optional[shared.Campaigns] = field(default=None)
    
