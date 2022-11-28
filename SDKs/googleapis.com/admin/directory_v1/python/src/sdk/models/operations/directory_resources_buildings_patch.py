from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DirectoryResourcesBuildingsPatchPathParams:
    building_id: str = field(metadata={'path_param': { 'field_name': 'buildingId', 'style': 'simple', 'explode': False }})
    customer: str = field(metadata={'path_param': { 'field_name': 'customer', 'style': 'simple', 'explode': False }})
    
class DirectoryResourcesBuildingsPatchCoordinatesSourceEnum(str, Enum):
    CLIENT_SPECIFIED = "CLIENT_SPECIFIED"
    RESOLVED_FROM_ADDRESS = "RESOLVED_FROM_ADDRESS"
    SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"


@dataclass
class DirectoryResourcesBuildingsPatchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    coordinates_source: Optional[DirectoryResourcesBuildingsPatchCoordinatesSourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'coordinatesSource', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryResourcesBuildingsPatchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryResourcesBuildingsPatchRequest:
    path_params: DirectoryResourcesBuildingsPatchPathParams = field()
    query_params: DirectoryResourcesBuildingsPatchQueryParams = field()
    security: DirectoryResourcesBuildingsPatchSecurity = field()
    request: Optional[shared.Building] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DirectoryResourcesBuildingsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    building: Optional[shared.Building] = field(default=None)
    
