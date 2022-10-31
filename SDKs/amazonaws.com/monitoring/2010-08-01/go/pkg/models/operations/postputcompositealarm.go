package operations




type PostPutCompositeAlarmActionEnum string

const (
    PostPutCompositeAlarmActionEnumPutCompositeAlarm PostPutCompositeAlarmActionEnum = "PutCompositeAlarm"
)



type PostPutCompositeAlarmVersionEnum string

const (
    PostPutCompositeAlarmVersionEnumTwoThousandAndTen0801 PostPutCompositeAlarmVersionEnum = "2010-08-01"
)


type PostPutCompositeAlarmQueryParams struct {
    Action PostPutCompositeAlarmActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPutCompositeAlarmVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPutCompositeAlarmHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPutCompositeAlarmRequest struct {
    QueryParams PostPutCompositeAlarmQueryParams 
    Headers PostPutCompositeAlarmHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPutCompositeAlarmResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

