package operations




type PostDeleteDbSnapshotActionEnum string

const (
    PostDeleteDbSnapshotActionEnumDeleteDbSnapshot PostDeleteDbSnapshotActionEnum = "DeleteDBSnapshot"
)



type PostDeleteDbSnapshotVersionEnum string

const (
    PostDeleteDbSnapshotVersionEnumTwoThousandAndFourteen1031 PostDeleteDbSnapshotVersionEnum = "2014-10-31"
)


type PostDeleteDbSnapshotQueryParams struct {
    Action PostDeleteDbSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteDbSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteDbSnapshotRequest struct {
    QueryParams PostDeleteDbSnapshotQueryParams 
    Headers PostDeleteDbSnapshotHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteDbSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

