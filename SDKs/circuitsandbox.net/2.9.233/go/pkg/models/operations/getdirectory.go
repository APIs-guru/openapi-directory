package operations

import (
"openapi/pkg/models/shared")


type GetDirectoryFilterEnum string

const (
    GetDirectoryFilterEnumNone GetDirectoryFilterEnum = "NONE"
GetDirectoryFilterEnumJoined GetDirectoryFilterEnum = "JOINED"
GetDirectoryFilterEnumRequested GetDirectoryFilterEnum = "REQUESTED"
GetDirectoryFilterEnumOpen GetDirectoryFilterEnum = "OPEN"
GetDirectoryFilterEnumClosed GetDirectoryFilterEnum = "CLOSED"
GetDirectoryFilterEnumNotJoinedRequested GetDirectoryFilterEnum = "NOT_JOINED_REQUESTED"
)



type GetDirectorySortByEnum string

const (
    GetDirectorySortByEnumLastContent GetDirectorySortByEnum = "LAST_CONTENT"
GetDirectorySortByEnumName GetDirectorySortByEnum = "NAME"
GetDirectorySortByEnumNumberOfUsers GetDirectorySortByEnum = "NUMBER_OF_USERS"
GetDirectorySortByEnumCreationDate GetDirectorySortByEnum = "CREATION_DATE"
)



type GetDirectorySortOrderEnum string

const (
    GetDirectorySortOrderEnumAscending GetDirectorySortOrderEnum = "ASCENDING"
GetDirectorySortOrderEnumDescending GetDirectorySortOrderEnum = "DESCENDING"
)


type GetDirectoryQueryParams struct {
    Filter GetDirectoryFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    NumberOfResults *float64 `queryParam:"style=form,explode=true,name=numberOfResults"`
    PagePointer *string `queryParam:"style=form,explode=true,name=pagePointer"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    SortBy GetDirectorySortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
    SortOrder GetDirectorySortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    
}

type GetDirectorySecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetDirectoryRequest struct {
    QueryParams GetDirectoryQueryParams 
    Security GetDirectorySecurity 
    
}

type GetDirectoryResponse struct {
    Body []byte 
    ContentType string 
    DirectoryResult *interface{} 
    StatusCode int64 
    
}

