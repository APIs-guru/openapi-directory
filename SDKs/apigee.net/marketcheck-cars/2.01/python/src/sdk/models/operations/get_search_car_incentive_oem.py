from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetSearchCarIncentiveOemOfferTypeEnum(str, Enum):
    LEASE = "lease"
    FINANCE = "finance"
    CASH = "cash"


@dataclass
class GetSearchCarIncentiveOemQueryParams:
    acquisition_fee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'acquisition_fee', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    apr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apr', 'style': 'form', 'explode': True }})
    cashback_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cashback_amount', 'style': 'form', 'explode': True }})
    cashback_target_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cashback_target_group', 'style': 'form', 'explode': True }})
    city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    country: Optional[shared.CountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    dealer_contribution: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dealer_contribution', 'style': 'form', 'explode': True }})
    disposition_fee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disposition_fee', 'style': 'form', 'explode': True }})
    down_payment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'down_payment', 'style': 'form', 'explode': True }})
    due_at_signing: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'due_at_signing', 'style': 'form', 'explode': True }})
    duration: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    facet_sort: Optional[shared.FacetSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'facet_sort', 'style': 'form', 'explode': True }})
    facets: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': True }})
    first_seen_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'first_seen_range', 'style': 'form', 'explode': True }})
    gross_capitalised_cost: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gross_capitalised_cost', 'style': 'form', 'explode': True }})
    last_seen_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_seen_range', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    lease_end_purchase_option: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lease_end_purchase_option', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    make: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    mileage_charge: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mileage_charge', 'style': 'form', 'explode': True }})
    mileage_charge_limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mileage_charge_limit', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    monthly: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'monthly', 'style': 'form', 'explode': True }})
    monthly_per_thousand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'monthly_per_thousand', 'style': 'form', 'explode': True }})
    msrp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'msrp', 'style': 'form', 'explode': True }})
    net_capitalised_cost: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'net_capitalised_cost', 'style': 'form', 'explode': True }})
    offer_type: Optional[GetSearchCarIncentiveOemOfferTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'offer_type', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    range_facets: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'range_facets', 'style': 'form', 'explode': True }})
    rows: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search_text', 'style': 'form', 'explode': True }})
    security_deposit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'security_deposit', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    stats: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stats', 'style': 'form', 'explode': True }})
    total_monthly_payment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'total_monthly_payment', 'style': 'form', 'explode': True }})
    trim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchCarIncentiveOemRequest:
    query_params: GetSearchCarIncentiveOemQueryParams = field()
    

@dataclass
class GetSearchCarIncentiveOemResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    search_response: Optional[shared.SearchResponse] = field(default=None)
    
