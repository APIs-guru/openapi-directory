package operations




type PostStopActivityStreamActionEnum string

const (
    PostStopActivityStreamActionEnumStopActivityStream PostStopActivityStreamActionEnum = "StopActivityStream"
)



type PostStopActivityStreamVersionEnum string

const (
    PostStopActivityStreamVersionEnumTwoThousandAndFourteen1031 PostStopActivityStreamVersionEnum = "2014-10-31"
)


type PostStopActivityStreamQueryParams struct {
    Action PostStopActivityStreamActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostStopActivityStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostStopActivityStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostStopActivityStreamRequest struct {
    QueryParams PostStopActivityStreamQueryParams 
    Headers PostStopActivityStreamHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostStopActivityStreamResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

