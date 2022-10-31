package operations




type GetDeleteUsageLimitActionEnum string

const (
    GetDeleteUsageLimitActionEnumDeleteUsageLimit GetDeleteUsageLimitActionEnum = "DeleteUsageLimit"
)



type GetDeleteUsageLimitVersionEnum string

const (
    GetDeleteUsageLimitVersionEnumTwoThousandAndTwelve1201 GetDeleteUsageLimitVersionEnum = "2012-12-01"
)


type GetDeleteUsageLimitQueryParams struct {
    Action GetDeleteUsageLimitActionEnum `queryParam:"style=form,explode=true,name=Action"`
    UsageLimitID string `queryParam:"style=form,explode=true,name=UsageLimitId"`
    Version GetDeleteUsageLimitVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteUsageLimitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteUsageLimitRequest struct {
    QueryParams GetDeleteUsageLimitQueryParams 
    Headers GetDeleteUsageLimitHeaders 
    
}

type GetDeleteUsageLimitResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

