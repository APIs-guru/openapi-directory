from dataclasses import dataclass, field
from enum import Enum

class HeaderEnumEnum(str, Enum):
    ACCEPT = "Accept"
    ACCEPT_CHARSET = "Accept-Charset"
    ACCEPT_DATETIME = "Accept-Datetime"
    ACCEPT_ENCODING = "Accept-Encoding"
    ACCEPT_LANGUAGE = "Accept-Language"
    AUTHORIZATION = "Authorization"
    CLOUD_FRONT_FORWARDED_PROTO = "CloudFront-Forwarded-Proto"
    CLOUD_FRONT_IS_DESKTOP_VIEWER = "CloudFront-Is-Desktop-Viewer"
    CLOUD_FRONT_IS_MOBILE_VIEWER = "CloudFront-Is-Mobile-Viewer"
    CLOUD_FRONT_IS_SMART_TV_VIEWER = "CloudFront-Is-SmartTV-Viewer"
    CLOUD_FRONT_IS_TABLET_VIEWER = "CloudFront-Is-Tablet-Viewer"
    CLOUD_FRONT_VIEWER_COUNTRY = "CloudFront-Viewer-Country"
    HOST = "Host"
    ORIGIN = "Origin"
    REFERER = "Referer"

