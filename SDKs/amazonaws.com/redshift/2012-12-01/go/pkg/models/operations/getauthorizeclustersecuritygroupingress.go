package operations

type GetAuthorizeClusterSecurityGroupIngressActionEnum string

const (
	GetAuthorizeClusterSecurityGroupIngressActionEnumAuthorizeClusterSecurityGroupIngress GetAuthorizeClusterSecurityGroupIngressActionEnum = "AuthorizeClusterSecurityGroupIngress"
)

type GetAuthorizeClusterSecurityGroupIngressVersionEnum string

const (
	GetAuthorizeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201 GetAuthorizeClusterSecurityGroupIngressVersionEnum = "2012-12-01"
)

type GetAuthorizeClusterSecurityGroupIngressQueryParams struct {
	Action                   GetAuthorizeClusterSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Cidrip                   *string                                            `queryParam:"style=form,explode=true,name=CIDRIP"`
	ClusterSecurityGroupName string                                             `queryParam:"style=form,explode=true,name=ClusterSecurityGroupName"`
	Ec2SecurityGroupName     *string                                            `queryParam:"style=form,explode=true,name=EC2SecurityGroupName"`
	Ec2SecurityGroupOwnerID  *string                                            `queryParam:"style=form,explode=true,name=EC2SecurityGroupOwnerId"`
	Version                  GetAuthorizeClusterSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAuthorizeClusterSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAuthorizeClusterSecurityGroupIngressRequest struct {
	QueryParams GetAuthorizeClusterSecurityGroupIngressQueryParams
	Headers     GetAuthorizeClusterSecurityGroupIngressHeaders
}

type GetAuthorizeClusterSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
