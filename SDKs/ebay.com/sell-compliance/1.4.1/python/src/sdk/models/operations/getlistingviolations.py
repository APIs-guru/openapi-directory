from dataclasses import dataclass, field
from typing import List,Optional
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
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingViolationsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingViolationsRequest:
    query_params: GetListingViolationsQueryParams = field(default=None)
    headers: GetListingViolationsHeaders = field(default=None)
    security: GetListingViolationsSecurity = field(default=None)
    

@dataclass
class GetListingViolationsResponse:
    content_type: str = field(default=None)
    paged_compliance_violation_collection: Optional[shared.PagedComplianceViolationCollection] = field(default=None)
    status_code: int = field(default=None)
    
