package operations

import (
"openapi/pkg/models/shared")


type AccountPatchPermissionsTypeEnum string

const (
    AccountPatchPermissionsTypeEnumDatapoint AccountPatchPermissionsTypeEnum = "datapoint"
AccountPatchPermissionsTypeEnumGroup AccountPatchPermissionsTypeEnum = "group"
)


type AccountPatchPermissionsPathParams struct {
    GuestID int64 `pathParam:"style=simple,explode=false,name=guestId"`
    Type AccountPatchPermissionsTypeEnum `pathParam:"style=simple,explode=false,name=type"`
    
}

type AccountPatchPermissionsRequests struct {
    APICoreRequestsPermissionPatchRequest *shared.APICoreRequestsPermissionPatchRequest `request:"mediaType=application/json"`
    APICoreRequestsPermissionPatchRequest1 *shared.APICoreRequestsPermissionPatchRequest `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreRequestsPermissionPatchRequest2 *shared.APICoreRequestsPermissionPatchRequest `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AccountPatchPermissionsRequest struct {
    PathParams AccountPatchPermissionsPathParams 
    Request AccountPatchPermissionsRequests 
    
}

type AccountPatchPermissionsResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

