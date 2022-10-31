package operations




type PostUntagResourceActionEnum string

const (
    PostUntagResourceActionEnumUntagResource PostUntagResourceActionEnum = "UntagResource"
)



type PostUntagResourceVersionEnum string

const (
    PostUntagResourceVersionEnumTwoThousandAndTen0801 PostUntagResourceVersionEnum = "2010-08-01"
)


type PostUntagResourceQueryParams struct {
    Action PostUntagResourceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUntagResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUntagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUntagResourceRequest struct {
    QueryParams PostUntagResourceQueryParams 
    Headers PostUntagResourceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUntagResourceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

