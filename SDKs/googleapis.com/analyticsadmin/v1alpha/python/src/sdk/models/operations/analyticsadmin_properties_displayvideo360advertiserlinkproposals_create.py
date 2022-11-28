from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams:
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
class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest:
    path_params: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams = field()
    query_params: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams = field()
    security: AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity = field()
    request: Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal: Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal] = field(default=None)
    
