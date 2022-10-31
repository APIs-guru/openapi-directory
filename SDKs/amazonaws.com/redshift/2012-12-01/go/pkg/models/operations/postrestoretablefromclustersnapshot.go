package operations




type PostRestoreTableFromClusterSnapshotActionEnum string

const (
    PostRestoreTableFromClusterSnapshotActionEnumRestoreTableFromClusterSnapshot PostRestoreTableFromClusterSnapshotActionEnum = "RestoreTableFromClusterSnapshot"
)



type PostRestoreTableFromClusterSnapshotVersionEnum string

const (
    PostRestoreTableFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201 PostRestoreTableFromClusterSnapshotVersionEnum = "2012-12-01"
)


type PostRestoreTableFromClusterSnapshotQueryParams struct {
    Action PostRestoreTableFromClusterSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRestoreTableFromClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRestoreTableFromClusterSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRestoreTableFromClusterSnapshotRequest struct {
    QueryParams PostRestoreTableFromClusterSnapshotQueryParams 
    Headers PostRestoreTableFromClusterSnapshotHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRestoreTableFromClusterSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

