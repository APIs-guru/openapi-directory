package operations




type PostCancelResizeActionEnum string

const (
    PostCancelResizeActionEnumCancelResize PostCancelResizeActionEnum = "CancelResize"
)



type PostCancelResizeVersionEnum string

const (
    PostCancelResizeVersionEnumTwoThousandAndTwelve1201 PostCancelResizeVersionEnum = "2012-12-01"
)


type PostCancelResizeQueryParams struct {
    Action PostCancelResizeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCancelResizeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCancelResizeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCancelResizeRequest struct {
    QueryParams PostCancelResizeQueryParams 
    Headers PostCancelResizeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCancelResizeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

