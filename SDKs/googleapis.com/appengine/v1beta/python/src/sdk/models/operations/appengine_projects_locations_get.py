from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AppengineProjectsLocationsGetPathParams:
    locations_id: str = field(metadata={'path_param': { 'field_name': 'locationsId', 'style': 'simple', 'explode': False }})
    projects_id: str = field(metadata={'path_param': { 'field_name': 'projectsId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppengineProjectsLocationsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AppengineProjectsLocationsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineProjectsLocationsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineProjectsLocationsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineProjectsLocationsGetSecurity:
    option1: Optional[AppengineProjectsLocationsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AppengineProjectsLocationsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[AppengineProjectsLocationsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AppengineProjectsLocationsGetRequest:
    path_params: AppengineProjectsLocationsGetPathParams = field()
    query_params: AppengineProjectsLocationsGetQueryParams = field()
    security: AppengineProjectsLocationsGetSecurity = field()
    

@dataclass
class AppengineProjectsLocationsGetResponse:
    content_type: str = field()
    status_code: int = field()
    location: Optional[shared.Location] = field(default=None)
    
