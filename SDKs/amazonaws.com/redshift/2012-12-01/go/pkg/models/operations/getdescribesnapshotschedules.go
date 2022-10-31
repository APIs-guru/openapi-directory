package operations




type GetDescribeSnapshotSchedulesActionEnum string

const (
    GetDescribeSnapshotSchedulesActionEnumDescribeSnapshotSchedules GetDescribeSnapshotSchedulesActionEnum = "DescribeSnapshotSchedules"
)



type GetDescribeSnapshotSchedulesVersionEnum string

const (
    GetDescribeSnapshotSchedulesVersionEnumTwoThousandAndTwelve1201 GetDescribeSnapshotSchedulesVersionEnum = "2012-12-01"
)


type GetDescribeSnapshotSchedulesQueryParams struct {
    Action GetDescribeSnapshotSchedulesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterIdentifier *string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    ScheduleIdentifier *string `queryParam:"style=form,explode=true,name=ScheduleIdentifier"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    TagValues []string `queryParam:"style=form,explode=true,name=TagValues"`
    Version GetDescribeSnapshotSchedulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeSnapshotSchedulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeSnapshotSchedulesRequest struct {
    QueryParams GetDescribeSnapshotSchedulesQueryParams 
    Headers GetDescribeSnapshotSchedulesHeaders 
    
}

type GetDescribeSnapshotSchedulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

