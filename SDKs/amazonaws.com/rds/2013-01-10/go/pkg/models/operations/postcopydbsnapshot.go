package operations




type PostCopyDbSnapshotActionEnum string

const (
    PostCopyDbSnapshotActionEnumCopyDbSnapshot PostCopyDbSnapshotActionEnum = "CopyDBSnapshot"
)



type PostCopyDbSnapshotVersionEnum string

const (
    PostCopyDbSnapshotVersionEnumTwoThousandAndThirteen0110 PostCopyDbSnapshotVersionEnum = "2013-01-10"
)


type PostCopyDbSnapshotQueryParams struct {
    Action PostCopyDbSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCopyDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCopyDbSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCopyDbSnapshotRequest struct {
    QueryParams PostCopyDbSnapshotQueryParams 
    Headers PostCopyDbSnapshotHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCopyDbSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

