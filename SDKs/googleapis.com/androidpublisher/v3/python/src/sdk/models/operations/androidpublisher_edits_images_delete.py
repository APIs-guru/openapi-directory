from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class AndroidpublisherEditsImagesDeleteImageTypeEnum(str, Enum):
    APP_IMAGE_TYPE_UNSPECIFIED = "appImageTypeUnspecified"
    PHONE_SCREENSHOTS = "phoneScreenshots"
    SEVEN_INCH_SCREENSHOTS = "sevenInchScreenshots"
    TEN_INCH_SCREENSHOTS = "tenInchScreenshots"
    TV_SCREENSHOTS = "tvScreenshots"
    WEAR_SCREENSHOTS = "wearScreenshots"
    ICON = "icon"
    FEATURE_GRAPHIC = "featureGraphic"
    TV_BANNER = "tvBanner"


@dataclass
class AndroidpublisherEditsImagesDeletePathParams:
    edit_id: str = field(metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    image_id: str = field(metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    image_type: AndroidpublisherEditsImagesDeleteImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsImagesDeleteQueryParams:
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
class AndroidpublisherEditsImagesDeleteSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsImagesDeleteRequest:
    path_params: AndroidpublisherEditsImagesDeletePathParams = field()
    query_params: AndroidpublisherEditsImagesDeleteQueryParams = field()
    security: AndroidpublisherEditsImagesDeleteSecurity = field()
    

@dataclass
class AndroidpublisherEditsImagesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
