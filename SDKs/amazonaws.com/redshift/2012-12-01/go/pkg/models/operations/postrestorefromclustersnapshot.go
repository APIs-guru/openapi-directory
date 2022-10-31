package operations




type PostRestoreFromClusterSnapshotActionEnum string

const (
    PostRestoreFromClusterSnapshotActionEnumRestoreFromClusterSnapshot PostRestoreFromClusterSnapshotActionEnum = "RestoreFromClusterSnapshot"
)



type PostRestoreFromClusterSnapshotVersionEnum string

const (
    PostRestoreFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201 PostRestoreFromClusterSnapshotVersionEnum = "2012-12-01"
)


type PostRestoreFromClusterSnapshotQueryParams struct {
    Action PostRestoreFromClusterSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRestoreFromClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRestoreFromClusterSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRestoreFromClusterSnapshotRequest struct {
    QueryParams PostRestoreFromClusterSnapshotQueryParams 
    Headers PostRestoreFromClusterSnapshotHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRestoreFromClusterSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

