package operations

import (
"openapi/pkg/models/shared")

type ApigeeOrganizationsApiproductsRateplansListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type ApigeeOrganizationsApiproductsRateplansListStateEnum string

const (
    ApigeeOrganizationsApiproductsRateplansListStateEnumStateUnspecified ApigeeOrganizationsApiproductsRateplansListStateEnum = "STATE_UNSPECIFIED"
ApigeeOrganizationsApiproductsRateplansListStateEnumDraft ApigeeOrganizationsApiproductsRateplansListStateEnum = "DRAFT"
ApigeeOrganizationsApiproductsRateplansListStateEnumPublished ApigeeOrganizationsApiproductsRateplansListStateEnum = "PUBLISHED"
)


type ApigeeOrganizationsApiproductsRateplansListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Expand *bool `queryParam:"style=form,explode=true,name=expand"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartKey *string `queryParam:"style=form,explode=true,name=startKey"`
    State *ApigeeOrganizationsApiproductsRateplansListStateEnum `queryParam:"style=form,explode=true,name=state"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ApigeeOrganizationsApiproductsRateplansListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApigeeOrganizationsApiproductsRateplansListRequest struct {
    PathParams ApigeeOrganizationsApiproductsRateplansListPathParams 
    QueryParams ApigeeOrganizationsApiproductsRateplansListQueryParams 
    Security ApigeeOrganizationsApiproductsRateplansListSecurity 
    
}

type ApigeeOrganizationsApiproductsRateplansListResponse struct {
    ContentType string 
    GoogleCloudApigeeV1ListRatePlansResponse *shared.GoogleCloudApigeeV1ListRatePlansResponse 
    StatusCode int64 
    
}

