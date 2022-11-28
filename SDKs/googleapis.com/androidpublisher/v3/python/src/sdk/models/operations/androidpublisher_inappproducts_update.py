from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AndroidpublisherInappproductsUpdatePathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    sku: str = field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherInappproductsUpdateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    allow_missing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowMissing', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    auto_convert_missing_prices: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoConvertMissingPrices', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherInappproductsUpdateSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherInappproductsUpdateRequest:
    path_params: AndroidpublisherInappproductsUpdatePathParams = field()
    query_params: AndroidpublisherInappproductsUpdateQueryParams = field()
    security: AndroidpublisherInappproductsUpdateSecurity = field()
    request: Optional[shared.InAppProduct] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AndroidpublisherInappproductsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    in_app_product: Optional[shared.InAppProduct] = field(default=None)
    
