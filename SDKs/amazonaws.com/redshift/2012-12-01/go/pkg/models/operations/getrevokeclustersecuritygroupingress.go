package operations

type GetRevokeClusterSecurityGroupIngressActionEnum string

const (
	GetRevokeClusterSecurityGroupIngressActionEnumRevokeClusterSecurityGroupIngress GetRevokeClusterSecurityGroupIngressActionEnum = "RevokeClusterSecurityGroupIngress"
)

type GetRevokeClusterSecurityGroupIngressVersionEnum string

const (
	GetRevokeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201 GetRevokeClusterSecurityGroupIngressVersionEnum = "2012-12-01"
)

type GetRevokeClusterSecurityGroupIngressQueryParams struct {
	Action                   GetRevokeClusterSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Cidrip                   *string                                         `queryParam:"style=form,explode=true,name=CIDRIP"`
	ClusterSecurityGroupName string                                          `queryParam:"style=form,explode=true,name=ClusterSecurityGroupName"`
	Ec2SecurityGroupName     *string                                         `queryParam:"style=form,explode=true,name=EC2SecurityGroupName"`
	Ec2SecurityGroupOwnerID  *string                                         `queryParam:"style=form,explode=true,name=EC2SecurityGroupOwnerId"`
	Version                  GetRevokeClusterSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRevokeClusterSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRevokeClusterSecurityGroupIngressRequest struct {
	QueryParams GetRevokeClusterSecurityGroupIngressQueryParams
	Headers     GetRevokeClusterSecurityGroupIngressHeaders
}

type GetRevokeClusterSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
