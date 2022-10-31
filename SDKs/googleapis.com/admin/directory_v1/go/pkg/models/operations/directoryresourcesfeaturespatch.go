package operations

import (
"openapi/pkg/models/shared")

type DirectoryResourcesFeaturesPatchPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    FeatureKey string `pathParam:"style=simple,explode=false,name=featureKey"`
    
}

type DirectoryResourcesFeaturesPatchQueryParams struct {
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

type DirectoryResourcesFeaturesPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryResourcesFeaturesPatchRequest struct {
    PathParams DirectoryResourcesFeaturesPatchPathParams 
    QueryParams DirectoryResourcesFeaturesPatchQueryParams 
    Request *shared.Feature `request:"mediaType=application/json"`
    Security DirectoryResourcesFeaturesPatchSecurity 
    
}

type DirectoryResourcesFeaturesPatchResponse struct {
    ContentType string 
    Feature *shared.Feature 
    StatusCode int64 
    
}

