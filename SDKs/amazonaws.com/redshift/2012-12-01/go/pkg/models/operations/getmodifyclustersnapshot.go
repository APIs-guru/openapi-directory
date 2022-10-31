package operations




type GetModifyClusterSnapshotActionEnum string

const (
    GetModifyClusterSnapshotActionEnumModifyClusterSnapshot GetModifyClusterSnapshotActionEnum = "ModifyClusterSnapshot"
)



type GetModifyClusterSnapshotVersionEnum string

const (
    GetModifyClusterSnapshotVersionEnumTwoThousandAndTwelve1201 GetModifyClusterSnapshotVersionEnum = "2012-12-01"
)


type GetModifyClusterSnapshotQueryParams struct {
    Action GetModifyClusterSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Force *bool `queryParam:"style=form,explode=true,name=Force"`
    ManualSnapshotRetentionPeriod *int64 `queryParam:"style=form,explode=true,name=ManualSnapshotRetentionPeriod"`
    SnapshotIdentifier string `queryParam:"style=form,explode=true,name=SnapshotIdentifier"`
    Version GetModifyClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyClusterSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyClusterSnapshotRequest struct {
    QueryParams GetModifyClusterSnapshotQueryParams 
    Headers GetModifyClusterSnapshotHeaders 
    
}

type GetModifyClusterSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

