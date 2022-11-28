from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class AdsensehostAssociationsessionsStartProductCodeEnum(str, Enum):
    AFC = "AFC"
    AFG = "AFG"
    AFMC = "AFMC"
    AFS = "AFS"
    AFV = "AFV"


@dataclass
class AdsensehostAssociationsessionsStartQueryParams:
    product_code: List[AdsensehostAssociationsessionsStartProductCodeEnum] = field(metadata={'query_param': { 'field_name': 'productCode', 'style': 'form', 'explode': True }})
    website_url: str = field(metadata={'query_param': { 'field_name': 'websiteUrl', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callbackUrl', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    user_locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userLocale', 'style': 'form', 'explode': True }})
    website_locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'websiteLocale', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsensehostAssociationsessionsStartSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsensehostAssociationsessionsStartRequest:
    query_params: AdsensehostAssociationsessionsStartQueryParams = field()
    security: AdsensehostAssociationsessionsStartSecurity = field()
    

@dataclass
class AdsensehostAssociationsessionsStartResponse:
    content_type: str = field()
    status_code: int = field()
    association_session: Optional[shared.AssociationSession] = field(default=None)
    
