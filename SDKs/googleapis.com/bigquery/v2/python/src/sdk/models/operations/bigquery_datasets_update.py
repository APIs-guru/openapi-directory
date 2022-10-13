from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BigqueryDatasetsUpdatePathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryDatasetsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryDatasetsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryDatasetsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryDatasetsUpdateSecurity:
    option1: Optional[BigqueryDatasetsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryDatasetsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryDatasetsUpdateRequest:
    path_params: BigqueryDatasetsUpdatePathParams = field(default=None)
    query_params: BigqueryDatasetsUpdateQueryParams = field(default=None)
    request: Optional[shared.Dataset] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BigqueryDatasetsUpdateSecurity = field(default=None)
    

@dataclass
class BigqueryDatasetsUpdateResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
