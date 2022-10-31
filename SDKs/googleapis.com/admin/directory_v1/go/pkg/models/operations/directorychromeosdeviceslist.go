package operations

import (
"openapi/pkg/models/shared")

type DirectoryChromeosdevicesListPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    
}


type DirectoryChromeosdevicesListOrderByEnum string

const (
    DirectoryChromeosdevicesListOrderByEnumAnnotatedLocation DirectoryChromeosdevicesListOrderByEnum = "annotatedLocation"
DirectoryChromeosdevicesListOrderByEnumAnnotatedUser DirectoryChromeosdevicesListOrderByEnum = "annotatedUser"
DirectoryChromeosdevicesListOrderByEnumLastSync DirectoryChromeosdevicesListOrderByEnum = "lastSync"
DirectoryChromeosdevicesListOrderByEnumNotes DirectoryChromeosdevicesListOrderByEnum = "notes"
DirectoryChromeosdevicesListOrderByEnumSerialNumber DirectoryChromeosdevicesListOrderByEnum = "serialNumber"
DirectoryChromeosdevicesListOrderByEnumStatus DirectoryChromeosdevicesListOrderByEnum = "status"
)



type DirectoryChromeosdevicesListProjectionEnum string

const (
    DirectoryChromeosdevicesListProjectionEnumBasic DirectoryChromeosdevicesListProjectionEnum = "BASIC"
DirectoryChromeosdevicesListProjectionEnumFull DirectoryChromeosdevicesListProjectionEnum = "FULL"
)



type DirectoryChromeosdevicesListSortOrderEnum string

const (
    DirectoryChromeosdevicesListSortOrderEnumAscending DirectoryChromeosdevicesListSortOrderEnum = "ASCENDING"
DirectoryChromeosdevicesListSortOrderEnumDescending DirectoryChromeosdevicesListSortOrderEnum = "DESCENDING"
)


type DirectoryChromeosdevicesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeChildOrgunits *bool `queryParam:"style=form,explode=true,name=includeChildOrgunits"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *DirectoryChromeosdevicesListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    OrgUnitPath *string `queryParam:"style=form,explode=true,name=orgUnitPath"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *DirectoryChromeosdevicesListProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SortOrder *DirectoryChromeosdevicesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryChromeosdevicesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryChromeosdevicesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryChromeosdevicesListSecurity struct {
    Option1 *DirectoryChromeosdevicesListSecurityOption1 `security:"option"`
    Option2 *DirectoryChromeosdevicesListSecurityOption2 `security:"option"`
    
}

type DirectoryChromeosdevicesListRequest struct {
    PathParams DirectoryChromeosdevicesListPathParams 
    QueryParams DirectoryChromeosdevicesListQueryParams 
    Security DirectoryChromeosdevicesListSecurity 
    
}

type DirectoryChromeosdevicesListResponse struct {
    ChromeOsDevices *shared.ChromeOsDevices 
    ContentType string 
    StatusCode int64 
    
}

