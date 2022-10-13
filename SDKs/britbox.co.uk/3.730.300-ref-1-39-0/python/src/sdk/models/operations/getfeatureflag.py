from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFeatureFlagPathParams:
    feature: str = field(default=None, metadata={'path_param': { 'field_name': 'feature', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeatureFlagQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeatureFlagRequest:
    path_params: GetFeatureFlagPathParams = field(default=None)
    query_params: GetFeatureFlagQueryParams = field(default=None)
    

@dataclass
class GetFeatureFlagResponse:
    content_type: str = field(default=None)
    itv_feature_flag: Optional[shared.ItvFeatureFlag] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
