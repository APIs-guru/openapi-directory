package operations

import (
"openapi/pkg/models/shared")

type ApigeeOrganizationsApiproductsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ApigeeOrganizationsApiproductsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Attributename *string `queryParam:"style=form,explode=true,name=attributename"`
    Attributevalue *string `queryParam:"style=form,explode=true,name=attributevalue"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Count *string `queryParam:"style=form,explode=true,name=count"`
    Expand *bool `queryParam:"style=form,explode=true,name=expand"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartKey *string `queryParam:"style=form,explode=true,name=startKey"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ApigeeOrganizationsApiproductsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApigeeOrganizationsApiproductsListRequest struct {
    PathParams ApigeeOrganizationsApiproductsListPathParams 
    QueryParams ApigeeOrganizationsApiproductsListQueryParams 
    Security ApigeeOrganizationsApiproductsListSecurity 
    
}

type ApigeeOrganizationsApiproductsListResponse struct {
    ContentType string 
    GoogleCloudApigeeV1ListAPIProductsResponse *shared.GoogleCloudApigeeV1ListAPIProductsResponse 
    StatusCode int64 
    
}

