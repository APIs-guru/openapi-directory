package operations




type GetDescribeEventCategoriesActionEnum string

const (
    GetDescribeEventCategoriesActionEnumDescribeEventCategories GetDescribeEventCategoriesActionEnum = "DescribeEventCategories"
)



type GetDescribeEventCategoriesVersionEnum string

const (
    GetDescribeEventCategoriesVersionEnumTwoThousandAndTwelve1201 GetDescribeEventCategoriesVersionEnum = "2012-12-01"
)


type GetDescribeEventCategoriesQueryParams struct {
    Action GetDescribeEventCategoriesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SourceType *string `queryParam:"style=form,explode=true,name=SourceType"`
    Version GetDescribeEventCategoriesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeEventCategoriesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeEventCategoriesRequest struct {
    QueryParams GetDescribeEventCategoriesQueryParams 
    Headers GetDescribeEventCategoriesHeaders 
    
}

type GetDescribeEventCategoriesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

