from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3PurchasedAssetsQueryParams:
    company_purchases: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'company_purchases', 'style': 'form', 'explode': True }})
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3PurchasedAssetsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3PurchasedAssetsRequest:
    headers: GetV3PurchasedAssetsHeaders = field()
    query_params: GetV3PurchasedAssetsQueryParams = field()
    

@dataclass
class GetV3PurchasedAssetsResponse:
    content_type: str = field()
    status_code: int = field()
    previous_asset_purchases: Optional[shared.PreviousAssetPurchases] = field(default=None)
    
