from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updateMask', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity:
    option1: Optional[AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest:
    path_params: AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams = field(default=None)
    query_params: AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams = field(default=None)
    request: Optional[shared.Listing] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity = field(default=None)
    

@dataclass
class AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse:
    content_type: str = field(default=None)
    listing: Optional[shared.Listing] = field(default=None)
    status_code: int = field(default=None)
    
