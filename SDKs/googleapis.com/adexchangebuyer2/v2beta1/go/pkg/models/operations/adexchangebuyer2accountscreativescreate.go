package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2AccountsCreativesCreatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}


type Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum string

const (
    Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnumNoDuplicates Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum = "NO_DUPLICATES"
Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnumForceEnableDuplicateIds Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum = "FORCE_ENABLE_DUPLICATE_IDS"
)


type Adexchangebuyer2AccountsCreativesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DuplicateIDMode *Adexchangebuyer2AccountsCreativesCreateDuplicateIDModeEnum `queryParam:"style=form,explode=true,name=duplicateIdMode"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type Adexchangebuyer2AccountsCreativesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2AccountsCreativesCreateRequest struct {
    PathParams Adexchangebuyer2AccountsCreativesCreatePathParams 
    QueryParams Adexchangebuyer2AccountsCreativesCreateQueryParams 
    Request *shared.Creative `request:"mediaType=application/json"`
    Security Adexchangebuyer2AccountsCreativesCreateSecurity 
    
}

type Adexchangebuyer2AccountsCreativesCreateResponse struct {
    ContentType string 
    Creative *shared.Creative 
    StatusCode int64 
    
}

