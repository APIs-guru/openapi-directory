package operations

import (
"openapi/pkg/models/shared")

type DirectoryMobiledevicesListPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    
}


type DirectoryMobiledevicesListOrderByEnum string

const (
    DirectoryMobiledevicesListOrderByEnumDeviceID DirectoryMobiledevicesListOrderByEnum = "deviceId"
DirectoryMobiledevicesListOrderByEnumEmail DirectoryMobiledevicesListOrderByEnum = "email"
DirectoryMobiledevicesListOrderByEnumLastSync DirectoryMobiledevicesListOrderByEnum = "lastSync"
DirectoryMobiledevicesListOrderByEnumModel DirectoryMobiledevicesListOrderByEnum = "model"
DirectoryMobiledevicesListOrderByEnumName DirectoryMobiledevicesListOrderByEnum = "name"
DirectoryMobiledevicesListOrderByEnumOs DirectoryMobiledevicesListOrderByEnum = "os"
DirectoryMobiledevicesListOrderByEnumStatus DirectoryMobiledevicesListOrderByEnum = "status"
DirectoryMobiledevicesListOrderByEnumType DirectoryMobiledevicesListOrderByEnum = "type"
)



type DirectoryMobiledevicesListProjectionEnum string

const (
    DirectoryMobiledevicesListProjectionEnumBasic DirectoryMobiledevicesListProjectionEnum = "BASIC"
DirectoryMobiledevicesListProjectionEnumFull DirectoryMobiledevicesListProjectionEnum = "FULL"
)



type DirectoryMobiledevicesListSortOrderEnum string

const (
    DirectoryMobiledevicesListSortOrderEnumAscending DirectoryMobiledevicesListSortOrderEnum = "ASCENDING"
DirectoryMobiledevicesListSortOrderEnumDescending DirectoryMobiledevicesListSortOrderEnum = "DESCENDING"
)


type DirectoryMobiledevicesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *DirectoryMobiledevicesListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *DirectoryMobiledevicesListProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SortOrder *DirectoryMobiledevicesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryMobiledevicesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMobiledevicesListSecurity struct {
    Option1 *DirectoryMobiledevicesListSecurityOption1 `security:"option"`
    Option2 *DirectoryMobiledevicesListSecurityOption2 `security:"option"`
    Option3 *DirectoryMobiledevicesListSecurityOption3 `security:"option"`
    
}

type DirectoryMobiledevicesListRequest struct {
    PathParams DirectoryMobiledevicesListPathParams 
    QueryParams DirectoryMobiledevicesListQueryParams 
    Security DirectoryMobiledevicesListSecurity 
    
}

type DirectoryMobiledevicesListResponse struct {
    ContentType string 
    MobileDevices *shared.MobileDevices 
    StatusCode int64 
    
}

