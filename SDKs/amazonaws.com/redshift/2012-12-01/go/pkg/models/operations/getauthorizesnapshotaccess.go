package operations




type GetAuthorizeSnapshotAccessActionEnum string

const (
    GetAuthorizeSnapshotAccessActionEnumAuthorizeSnapshotAccess GetAuthorizeSnapshotAccessActionEnum = "AuthorizeSnapshotAccess"
)



type GetAuthorizeSnapshotAccessVersionEnum string

const (
    GetAuthorizeSnapshotAccessVersionEnumTwoThousandAndTwelve1201 GetAuthorizeSnapshotAccessVersionEnum = "2012-12-01"
)


type GetAuthorizeSnapshotAccessQueryParams struct {
    AccountWithRestoreAccess string `queryParam:"style=form,explode=true,name=AccountWithRestoreAccess"`
    Action GetAuthorizeSnapshotAccessActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SnapshotClusterIdentifier *string `queryParam:"style=form,explode=true,name=SnapshotClusterIdentifier"`
    SnapshotIdentifier string `queryParam:"style=form,explode=true,name=SnapshotIdentifier"`
    Version GetAuthorizeSnapshotAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAuthorizeSnapshotAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAuthorizeSnapshotAccessRequest struct {
    QueryParams GetAuthorizeSnapshotAccessQueryParams 
    Headers GetAuthorizeSnapshotAccessHeaders 
    
}

type GetAuthorizeSnapshotAccessResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

