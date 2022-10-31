package operations




type PostListDashboardsActionEnum string

const (
    PostListDashboardsActionEnumListDashboards PostListDashboardsActionEnum = "ListDashboards"
)



type PostListDashboardsVersionEnum string

const (
    PostListDashboardsVersionEnumTwoThousandAndTen0801 PostListDashboardsVersionEnum = "2010-08-01"
)


type PostListDashboardsQueryParams struct {
    Action PostListDashboardsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostListDashboardsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListDashboardsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListDashboardsRequest struct {
    QueryParams PostListDashboardsQueryParams 
    Headers PostListDashboardsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListDashboardsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

