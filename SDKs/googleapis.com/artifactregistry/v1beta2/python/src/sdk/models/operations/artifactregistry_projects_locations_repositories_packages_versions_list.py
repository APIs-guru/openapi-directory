from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum(str, Enum):
    VERSION_VIEW_UNSPECIFIED = "VERSION_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity:
    option1: Optional[ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest:
    path_params: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams = field()
    query_params: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams = field()
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity = field()
    

@dataclass
class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_versions_response: Optional[shared.ListVersionsResponse] = field(default=None)
    
