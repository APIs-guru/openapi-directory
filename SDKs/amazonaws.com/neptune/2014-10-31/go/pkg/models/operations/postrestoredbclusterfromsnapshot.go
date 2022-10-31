package operations




type PostRestoreDbClusterFromSnapshotActionEnum string

const (
    PostRestoreDbClusterFromSnapshotActionEnumRestoreDbClusterFromSnapshot PostRestoreDbClusterFromSnapshotActionEnum = "RestoreDBClusterFromSnapshot"
)



type PostRestoreDbClusterFromSnapshotVersionEnum string

const (
    PostRestoreDbClusterFromSnapshotVersionEnumTwoThousandAndFourteen1031 PostRestoreDbClusterFromSnapshotVersionEnum = "2014-10-31"
)


type PostRestoreDbClusterFromSnapshotQueryParams struct {
    Action PostRestoreDbClusterFromSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRestoreDbClusterFromSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRestoreDbClusterFromSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRestoreDbClusterFromSnapshotRequest struct {
    QueryParams PostRestoreDbClusterFromSnapshotQueryParams 
    Headers PostRestoreDbClusterFromSnapshotHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRestoreDbClusterFromSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

