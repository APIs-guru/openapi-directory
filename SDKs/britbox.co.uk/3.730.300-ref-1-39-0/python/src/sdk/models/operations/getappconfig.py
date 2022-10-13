from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetAppConfigIncludeEnum(str, Enum):
    CLASSIFICATION = "classification"
    PLAYBACK = "playback"
    SITEMAP = "sitemap"
    NAVIGATION = "navigation"
    SUBSCRIPTION = "subscription"
    GENERAL = "general"
    DISPLAY = "display"
    I18N = "i18n"
    LINEAR = "linear"


@dataclass
class GetAppConfigQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    include: Optional[List[GetAppConfigIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    system: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'system', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppConfigRequest:
    query_params: GetAppConfigQueryParams = field(default=None)
    

@dataclass
class GetAppConfigResponse:
    app_config: Optional[shared.AppConfig] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
