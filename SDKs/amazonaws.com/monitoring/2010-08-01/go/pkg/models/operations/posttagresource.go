package operations




type PostTagResourceActionEnum string

const (
    PostTagResourceActionEnumTagResource PostTagResourceActionEnum = "TagResource"
)



type PostTagResourceVersionEnum string

const (
    PostTagResourceVersionEnumTwoThousandAndTen0801 PostTagResourceVersionEnum = "2010-08-01"
)


type PostTagResourceQueryParams struct {
    Action PostTagResourceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostTagResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostTagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostTagResourceRequest struct {
    QueryParams PostTagResourceQueryParams 
    Headers PostTagResourceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostTagResourceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

