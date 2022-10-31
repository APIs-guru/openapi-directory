package operations




type GetPutDashboardActionEnum string

const (
    GetPutDashboardActionEnumPutDashboard GetPutDashboardActionEnum = "PutDashboard"
)



type GetPutDashboardVersionEnum string

const (
    GetPutDashboardVersionEnumTwoThousandAndTen0801 GetPutDashboardVersionEnum = "2010-08-01"
)


type GetPutDashboardQueryParams struct {
    Action GetPutDashboardActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DashboardBody string `queryParam:"style=form,explode=true,name=DashboardBody"`
    DashboardName string `queryParam:"style=form,explode=true,name=DashboardName"`
    Version GetPutDashboardVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetPutDashboardHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPutDashboardRequest struct {
    QueryParams GetPutDashboardQueryParams 
    Headers GetPutDashboardHeaders 
    
}

type GetPutDashboardResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

