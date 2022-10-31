package operations




type PostCreateScheduledActionActionEnum string

const (
    PostCreateScheduledActionActionEnumCreateScheduledAction PostCreateScheduledActionActionEnum = "CreateScheduledAction"
)



type PostCreateScheduledActionVersionEnum string

const (
    PostCreateScheduledActionVersionEnumTwoThousandAndTwelve1201 PostCreateScheduledActionVersionEnum = "2012-12-01"
)


type PostCreateScheduledActionQueryParams struct {
    Action PostCreateScheduledActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateScheduledActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateScheduledActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateScheduledActionRequest struct {
    QueryParams PostCreateScheduledActionQueryParams 
    Headers PostCreateScheduledActionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateScheduledActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

