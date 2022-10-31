package operations




type PostModifyClusterSnapshotScheduleActionEnum string

const (
    PostModifyClusterSnapshotScheduleActionEnumModifyClusterSnapshotSchedule PostModifyClusterSnapshotScheduleActionEnum = "ModifyClusterSnapshotSchedule"
)



type PostModifyClusterSnapshotScheduleVersionEnum string

const (
    PostModifyClusterSnapshotScheduleVersionEnumTwoThousandAndTwelve1201 PostModifyClusterSnapshotScheduleVersionEnum = "2012-12-01"
)


type PostModifyClusterSnapshotScheduleQueryParams struct {
    Action PostModifyClusterSnapshotScheduleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyClusterSnapshotScheduleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyClusterSnapshotScheduleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyClusterSnapshotScheduleRequest struct {
    QueryParams PostModifyClusterSnapshotScheduleQueryParams 
    Headers PostModifyClusterSnapshotScheduleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyClusterSnapshotScheduleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

