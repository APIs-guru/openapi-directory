package operations




type PostCreateSnapshotScheduleActionEnum string

const (
    PostCreateSnapshotScheduleActionEnumCreateSnapshotSchedule PostCreateSnapshotScheduleActionEnum = "CreateSnapshotSchedule"
)



type PostCreateSnapshotScheduleVersionEnum string

const (
    PostCreateSnapshotScheduleVersionEnumTwoThousandAndTwelve1201 PostCreateSnapshotScheduleVersionEnum = "2012-12-01"
)


type PostCreateSnapshotScheduleQueryParams struct {
    Action PostCreateSnapshotScheduleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateSnapshotScheduleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateSnapshotScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateSnapshotScheduleRequest struct {
    QueryParams PostCreateSnapshotScheduleQueryParams 
    Headers PostCreateSnapshotScheduleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateSnapshotScheduleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

