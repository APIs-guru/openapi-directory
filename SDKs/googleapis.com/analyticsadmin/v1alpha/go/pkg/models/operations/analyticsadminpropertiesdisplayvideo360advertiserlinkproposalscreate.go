package operations

import (
"openapi/pkg/models/shared")

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest struct {
    PathParams AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams 
    QueryParams AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams 
    Request *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal `request:"mediaType=application/json"`
    Security AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity 
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse struct {
    ContentType string 
    GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal 
    StatusCode int64 
    
}

