from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetMdsQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    base_exterior_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base_exterior_color', 'style': 'form', 'explode': True }})
    base_interior_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base_interior_color', 'style': 'form', 'explode': True }})
    body_subtype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_subtype', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    car_type: Optional[shared.CarCarTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    carfax_1_owner: Optional[shared.Carfax1OwnerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'carfax_1_owner', 'style': 'form', 'explode': True }})
    carfax_clean_title: Optional[shared.CarfaxCleanTitleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'carfax_clean_title', 'style': 'form', 'explode': True }})
    city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    city_mpg_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city_mpg_range', 'style': 'form', 'explode': True }})
    country: Optional[shared.CountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    cylinders: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cylinders', 'style': 'form', 'explode': True }})
    dealer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dealer_id', 'style': 'form', 'explode': True }})
    dealer_type: Optional[shared.DealerTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dealer_type', 'style': 'form', 'explode': True }})
    dealership_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dealership_group_name', 'style': 'form', 'explode': True }})
    debug: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    dom_180_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dom_180_range', 'style': 'form', 'explode': True }})
    dom_active_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dom_active_range', 'style': 'form', 'explode': True }})
    dom_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dom_range', 'style': 'form', 'explode': True }})
    doors: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'doors', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    engine_aspiration: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine_aspiration', 'style': 'form', 'explode': True }})
    engine_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine_block', 'style': 'form', 'explode': True }})
    engine_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine_size', 'style': 'form', 'explode': True }})
    exact: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exact', 'style': 'form', 'explode': True }})
    exterior_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exterior_color', 'style': 'form', 'explode': True }})
    finance_down_payment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'finance_down_payment', 'style': 'form', 'explode': True }})
    finance_down_payment_per: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'finance_down_payment_per', 'style': 'form', 'explode': True }})
    finance_emp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'finance_emp', 'style': 'form', 'explode': True }})
    finance_loan_apr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'finance_loan_apr', 'style': 'form', 'explode': True }})
    finance_loan_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'finance_loan_term', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    highway_mpg_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'highway_mpg_range', 'style': 'form', 'explode': True }})
    include_sold: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_sold', 'style': 'form', 'explode': True }})
    interior_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interior_color', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    lease_down_payment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lease_down_payment', 'style': 'form', 'explode': True }})
    lease_emp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lease_emp', 'style': 'form', 'explode': True }})
    lease_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lease_term', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    make: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    miles_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'miles_range', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    msa_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'msa_code', 'style': 'form', 'explode': True }})
    msrp_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'msrp_range', 'style': 'form', 'explode': True }})
    price_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'price_range', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    vin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    ymmt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ymmt', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMdsRequest:
    query_params: GetMdsQueryParams = field(default=None)
    

@dataclass
class GetMdsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    mds: Optional[shared.Mds] = field(default=None)
    status_code: int = field(default=None)
    
