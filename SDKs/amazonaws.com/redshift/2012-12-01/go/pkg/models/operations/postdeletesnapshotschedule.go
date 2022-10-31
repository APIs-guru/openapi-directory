package operations




type PostDeleteSnapshotScheduleActionEnum string

const (
    PostDeleteSnapshotScheduleActionEnumDeleteSnapshotSchedule PostDeleteSnapshotScheduleActionEnum = "DeleteSnapshotSchedule"
)



type PostDeleteSnapshotScheduleVersionEnum string

const (
    PostDeleteSnapshotScheduleVersionEnumTwoThousandAndTwelve1201 PostDeleteSnapshotScheduleVersionEnum = "2012-12-01"
)


type PostDeleteSnapshotScheduleQueryParams struct {
    Action PostDeleteSnapshotScheduleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteSnapshotScheduleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteSnapshotScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteSnapshotScheduleRequest struct {
    QueryParams PostDeleteSnapshotScheduleQueryParams 
    Headers PostDeleteSnapshotScheduleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteSnapshotScheduleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

