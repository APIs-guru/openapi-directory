from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetDealerSalesRegionSalesGetQueryParams:
    brand_name: str = field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    month: date = field(metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    region_name: str = field(metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDealerSalesRegionSalesGetRequest:
    query_params: GetDealerSalesRegionSalesGetQueryParams = field()
    

@dataclass
class GetDealerSalesRegionSalesGetResponse:
    content_type: str = field()
    status_code: int = field()
    generic_response: Optional[shared.GenericResponse] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
