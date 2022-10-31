package operations




type GetDeleteSnapshotScheduleActionEnum string

const (
    GetDeleteSnapshotScheduleActionEnumDeleteSnapshotSchedule GetDeleteSnapshotScheduleActionEnum = "DeleteSnapshotSchedule"
)



type GetDeleteSnapshotScheduleVersionEnum string

const (
    GetDeleteSnapshotScheduleVersionEnumTwoThousandAndTwelve1201 GetDeleteSnapshotScheduleVersionEnum = "2012-12-01"
)


type GetDeleteSnapshotScheduleQueryParams struct {
    Action GetDeleteSnapshotScheduleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ScheduleIdentifier string `queryParam:"style=form,explode=true,name=ScheduleIdentifier"`
    Version GetDeleteSnapshotScheduleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteSnapshotScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteSnapshotScheduleRequest struct {
    QueryParams GetDeleteSnapshotScheduleQueryParams 
    Headers GetDeleteSnapshotScheduleHeaders 
    
}

type GetDeleteSnapshotScheduleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

