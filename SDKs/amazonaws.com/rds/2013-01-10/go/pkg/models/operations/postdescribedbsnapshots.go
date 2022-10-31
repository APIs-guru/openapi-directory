package operations




type PostDescribeDbSnapshotsActionEnum string

const (
    PostDescribeDbSnapshotsActionEnumDescribeDbSnapshots PostDescribeDbSnapshotsActionEnum = "DescribeDBSnapshots"
)



type PostDescribeDbSnapshotsVersionEnum string

const (
    PostDescribeDbSnapshotsVersionEnumTwoThousandAndThirteen0110 PostDescribeDbSnapshotsVersionEnum = "2013-01-10"
)


type PostDescribeDbSnapshotsQueryParams struct {
    Action PostDescribeDbSnapshotsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeDbSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDbSnapshotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDbSnapshotsRequest struct {
    QueryParams PostDescribeDbSnapshotsQueryParams 
    Headers PostDescribeDbSnapshotsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDbSnapshotsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

