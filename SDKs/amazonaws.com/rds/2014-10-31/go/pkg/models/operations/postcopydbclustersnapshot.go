package operations




type PostCopyDbClusterSnapshotActionEnum string

const (
    PostCopyDbClusterSnapshotActionEnumCopyDbClusterSnapshot PostCopyDbClusterSnapshotActionEnum = "CopyDBClusterSnapshot"
)



type PostCopyDbClusterSnapshotVersionEnum string

const (
    PostCopyDbClusterSnapshotVersionEnumTwoThousandAndFourteen1031 PostCopyDbClusterSnapshotVersionEnum = "2014-10-31"
)


type PostCopyDbClusterSnapshotQueryParams struct {
    Action PostCopyDbClusterSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCopyDbClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCopyDbClusterSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCopyDbClusterSnapshotRequest struct {
    QueryParams PostCopyDbClusterSnapshotQueryParams 
    Headers PostCopyDbClusterSnapshotHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCopyDbClusterSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

