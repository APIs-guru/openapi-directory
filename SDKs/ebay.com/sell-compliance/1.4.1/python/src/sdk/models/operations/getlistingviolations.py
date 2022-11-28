from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingViolationsQueryParams:
    compliance_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'compliance_type', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    listing_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'listing_id', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingViolationsHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingViolationsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingViolationsRequest:
    headers: GetListingViolationsHeaders = field()
    query_params: GetListingViolationsQueryParams = field()
    security: GetListingViolationsSecurity = field()
    

@dataclass
class GetListingViolationsResponse:
    content_type: str = field()
    status_code: int = field()
    paged_compliance_violation_collection: Optional[shared.PagedComplianceViolationCollection] = field(default=None)
    
