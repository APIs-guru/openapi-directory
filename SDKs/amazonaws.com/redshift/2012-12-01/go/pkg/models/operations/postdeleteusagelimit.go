package operations




type PostDeleteUsageLimitActionEnum string

const (
    PostDeleteUsageLimitActionEnumDeleteUsageLimit PostDeleteUsageLimitActionEnum = "DeleteUsageLimit"
)



type PostDeleteUsageLimitVersionEnum string

const (
    PostDeleteUsageLimitVersionEnumTwoThousandAndTwelve1201 PostDeleteUsageLimitVersionEnum = "2012-12-01"
)


type PostDeleteUsageLimitQueryParams struct {
    Action PostDeleteUsageLimitActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteUsageLimitVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteUsageLimitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteUsageLimitRequest struct {
    QueryParams PostDeleteUsageLimitQueryParams 
    Headers PostDeleteUsageLimitHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteUsageLimitResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

