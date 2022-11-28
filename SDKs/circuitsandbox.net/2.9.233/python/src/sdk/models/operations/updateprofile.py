from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateProfileRequestBodyLocaleEnum(str, Enum):
    EN_US = "EN_US"
    DE_DE = "DE_DE"
    EN_GB = "EN_GB"
    ES_ES = "ES_ES"
    FR_FR = "FR_FR"
    IT_IT = "IT_IT"
    RU_RU = "RU_RU"
    ZH_HANS_CN = "ZH_HANS_CN"
    PT_BR = "PT_BR"
    NL_NL = "NL_NL"
    CA_ES = "CA_ES"


@dataclass
class UpdateProfileRequestBody:
    firstname: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'firstname' }})
    job_title: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'jobTitle' }})
    lastname: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'lastname' }})
    locale: Optional[UpdateProfileRequestBodyLocaleEnum] = field(default=None, metadata={'form': { 'field_name': 'locale' }})
    

@dataclass
class UpdateProfileSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateProfileRequest:
    security: UpdateProfileSecurity = field()
    request: Optional[UpdateProfileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateProfileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user: Optional[Any] = field(default=None)
    
