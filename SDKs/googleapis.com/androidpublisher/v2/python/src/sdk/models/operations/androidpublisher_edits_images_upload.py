from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class AndroidpublisherEditsImagesUploadImageTypeEnum(str, Enum):
    FEATURE_GRAPHIC = "featureGraphic"
    ICON = "icon"
    PHONE_SCREENSHOTS = "phoneScreenshots"
    PROMO_GRAPHIC = "promoGraphic"
    SEVEN_INCH_SCREENSHOTS = "sevenInchScreenshots"
    TEN_INCH_SCREENSHOTS = "tenInchScreenshots"
    TV_BANNER = "tvBanner"
    TV_SCREENSHOTS = "tvScreenshots"
    WEAR_SCREENSHOTS = "wearScreenshots"


@dataclass
class AndroidpublisherEditsImagesUploadPathParams:
    edit_id: str = field(default=None, metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    image_type: AndroidpublisherEditsImagesUploadImageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsImagesUploadQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherEditsImagesUploadSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsImagesUploadRequest:
    path_params: AndroidpublisherEditsImagesUploadPathParams = field(default=None)
    query_params: AndroidpublisherEditsImagesUploadQueryParams = field(default=None)
    security: AndroidpublisherEditsImagesUploadSecurity = field(default=None)
    

@dataclass
class AndroidpublisherEditsImagesUploadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
