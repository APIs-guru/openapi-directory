package operations




type GetBatchModifyClusterSnapshotsActionEnum string

const (
    GetBatchModifyClusterSnapshotsActionEnumBatchModifyClusterSnapshots GetBatchModifyClusterSnapshotsActionEnum = "BatchModifyClusterSnapshots"
)



type GetBatchModifyClusterSnapshotsVersionEnum string

const (
    GetBatchModifyClusterSnapshotsVersionEnumTwoThousandAndTwelve1201 GetBatchModifyClusterSnapshotsVersionEnum = "2012-12-01"
)


type GetBatchModifyClusterSnapshotsQueryParams struct {
    Action GetBatchModifyClusterSnapshotsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Force *bool `queryParam:"style=form,explode=true,name=Force"`
    ManualSnapshotRetentionPeriod *int64 `queryParam:"style=form,explode=true,name=ManualSnapshotRetentionPeriod"`
    SnapshotIdentifierList []string `queryParam:"style=form,explode=true,name=SnapshotIdentifierList"`
    Version GetBatchModifyClusterSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetBatchModifyClusterSnapshotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetBatchModifyClusterSnapshotsRequest struct {
    QueryParams GetBatchModifyClusterSnapshotsQueryParams 
    Headers GetBatchModifyClusterSnapshotsHeaders 
    
}

type GetBatchModifyClusterSnapshotsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

