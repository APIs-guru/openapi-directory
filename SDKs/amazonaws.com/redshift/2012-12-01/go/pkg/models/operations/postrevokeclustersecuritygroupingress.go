package operations




type PostRevokeClusterSecurityGroupIngressActionEnum string

const (
    PostRevokeClusterSecurityGroupIngressActionEnumRevokeClusterSecurityGroupIngress PostRevokeClusterSecurityGroupIngressActionEnum = "RevokeClusterSecurityGroupIngress"
)



type PostRevokeClusterSecurityGroupIngressVersionEnum string

const (
    PostRevokeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201 PostRevokeClusterSecurityGroupIngressVersionEnum = "2012-12-01"
)


type PostRevokeClusterSecurityGroupIngressQueryParams struct {
    Action PostRevokeClusterSecurityGroupIngressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRevokeClusterSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRevokeClusterSecurityGroupIngressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRevokeClusterSecurityGroupIngressRequest struct {
    QueryParams PostRevokeClusterSecurityGroupIngressQueryParams 
    Headers PostRevokeClusterSecurityGroupIngressHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRevokeClusterSecurityGroupIngressResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

