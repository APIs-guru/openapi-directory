package operations




type PostDescribeSnapshotSchedulesActionEnum string

const (
    PostDescribeSnapshotSchedulesActionEnumDescribeSnapshotSchedules PostDescribeSnapshotSchedulesActionEnum = "DescribeSnapshotSchedules"
)



type PostDescribeSnapshotSchedulesVersionEnum string

const (
    PostDescribeSnapshotSchedulesVersionEnumTwoThousandAndTwelve1201 PostDescribeSnapshotSchedulesVersionEnum = "2012-12-01"
)


type PostDescribeSnapshotSchedulesQueryParams struct {
    Action PostDescribeSnapshotSchedulesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeSnapshotSchedulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSnapshotSchedulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSnapshotSchedulesRequest struct {
    QueryParams PostDescribeSnapshotSchedulesQueryParams 
    Headers PostDescribeSnapshotSchedulesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSnapshotSchedulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

