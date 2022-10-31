package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherEditsCommitPathParams struct {
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsCommitQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ChangesNotSentForReview *bool `queryParam:"style=form,explode=true,name=changesNotSentForReview"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AndroidpublisherEditsCommitSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsCommitRequest struct {
    PathParams AndroidpublisherEditsCommitPathParams 
    QueryParams AndroidpublisherEditsCommitQueryParams 
    Security AndroidpublisherEditsCommitSecurity 
    
}

type AndroidpublisherEditsCommitResponse struct {
    AppEdit *shared.AppEdit 
    ContentType string 
    StatusCode int64 
    
}

