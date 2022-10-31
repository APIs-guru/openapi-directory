package operations




type PostBatchDeleteClusterSnapshotsActionEnum string

const (
    PostBatchDeleteClusterSnapshotsActionEnumBatchDeleteClusterSnapshots PostBatchDeleteClusterSnapshotsActionEnum = "BatchDeleteClusterSnapshots"
)



type PostBatchDeleteClusterSnapshotsVersionEnum string

const (
    PostBatchDeleteClusterSnapshotsVersionEnumTwoThousandAndTwelve1201 PostBatchDeleteClusterSnapshotsVersionEnum = "2012-12-01"
)


type PostBatchDeleteClusterSnapshotsQueryParams struct {
    Action PostBatchDeleteClusterSnapshotsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostBatchDeleteClusterSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostBatchDeleteClusterSnapshotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostBatchDeleteClusterSnapshotsRequest struct {
    QueryParams PostBatchDeleteClusterSnapshotsQueryParams 
    Headers PostBatchDeleteClusterSnapshotsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostBatchDeleteClusterSnapshotsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

