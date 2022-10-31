package operations




type PostAuthorizeSnapshotAccessActionEnum string

const (
    PostAuthorizeSnapshotAccessActionEnumAuthorizeSnapshotAccess PostAuthorizeSnapshotAccessActionEnum = "AuthorizeSnapshotAccess"
)



type PostAuthorizeSnapshotAccessVersionEnum string

const (
    PostAuthorizeSnapshotAccessVersionEnumTwoThousandAndTwelve1201 PostAuthorizeSnapshotAccessVersionEnum = "2012-12-01"
)


type PostAuthorizeSnapshotAccessQueryParams struct {
    Action PostAuthorizeSnapshotAccessActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAuthorizeSnapshotAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAuthorizeSnapshotAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAuthorizeSnapshotAccessRequest struct {
    QueryParams PostAuthorizeSnapshotAccessQueryParams 
    Headers PostAuthorizeSnapshotAccessHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAuthorizeSnapshotAccessResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

