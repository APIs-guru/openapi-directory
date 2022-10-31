package operations




type GetDeleteSnapshotCopyGrantActionEnum string

const (
    GetDeleteSnapshotCopyGrantActionEnumDeleteSnapshotCopyGrant GetDeleteSnapshotCopyGrantActionEnum = "DeleteSnapshotCopyGrant"
)



type GetDeleteSnapshotCopyGrantVersionEnum string

const (
    GetDeleteSnapshotCopyGrantVersionEnumTwoThousandAndTwelve1201 GetDeleteSnapshotCopyGrantVersionEnum = "2012-12-01"
)


type GetDeleteSnapshotCopyGrantQueryParams struct {
    Action GetDeleteSnapshotCopyGrantActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SnapshotCopyGrantName string `queryParam:"style=form,explode=true,name=SnapshotCopyGrantName"`
    Version GetDeleteSnapshotCopyGrantVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteSnapshotCopyGrantHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteSnapshotCopyGrantRequest struct {
    QueryParams GetDeleteSnapshotCopyGrantQueryParams 
    Headers GetDeleteSnapshotCopyGrantHeaders 
    
}

type GetDeleteSnapshotCopyGrantResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

