from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BigqueryModelsGetPathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryModelsGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryModelsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryModelsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryModelsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryModelsGetSecurity:
    option1: Optional[BigqueryModelsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryModelsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryModelsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryModelsGetRequest:
    path_params: BigqueryModelsGetPathParams = field(default=None)
    query_params: BigqueryModelsGetQueryParams = field(default=None)
    security: BigqueryModelsGetSecurity = field(default=None)
    

@dataclass
class BigqueryModelsGetResponse:
    content_type: str = field(default=None)
    model: Optional[shared.Model] = field(default=None)
    status_code: int = field(default=None)
    
