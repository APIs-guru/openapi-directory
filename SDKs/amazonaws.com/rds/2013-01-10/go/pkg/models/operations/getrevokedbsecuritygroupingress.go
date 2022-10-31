package operations

type GetRevokeDbSecurityGroupIngressActionEnum string

const (
	GetRevokeDbSecurityGroupIngressActionEnumRevokeDbSecurityGroupIngress GetRevokeDbSecurityGroupIngressActionEnum = "RevokeDBSecurityGroupIngress"
)

type GetRevokeDbSecurityGroupIngressVersionEnum string

const (
	GetRevokeDbSecurityGroupIngressVersionEnumTwoThousandAndThirteen0110 GetRevokeDbSecurityGroupIngressVersionEnum = "2013-01-10"
)

type GetRevokeDbSecurityGroupIngressQueryParams struct {
	Action                  GetRevokeDbSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Cidrip                  *string                                    `queryParam:"style=form,explode=true,name=CIDRIP"`
	DbSecurityGroupName     string                                     `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
	Ec2SecurityGroupID      *string                                    `queryParam:"style=form,explode=true,name=EC2SecurityGroupId"`
	Ec2SecurityGroupName    *string                                    `queryParam:"style=form,explode=true,name=EC2SecurityGroupName"`
	Ec2SecurityGroupOwnerID *string                                    `queryParam:"style=form,explode=true,name=EC2SecurityGroupOwnerId"`
	Version                 GetRevokeDbSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRevokeDbSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRevokeDbSecurityGroupIngressRequest struct {
	QueryParams GetRevokeDbSecurityGroupIngressQueryParams
	Headers     GetRevokeDbSecurityGroupIngressHeaders
}

type GetRevokeDbSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
