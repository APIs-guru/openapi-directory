package operations

type GetDeleteClusterSecurityGroupActionEnum string

const (
	GetDeleteClusterSecurityGroupActionEnumDeleteClusterSecurityGroup GetDeleteClusterSecurityGroupActionEnum = "DeleteClusterSecurityGroup"
)

type GetDeleteClusterSecurityGroupVersionEnum string

const (
	GetDeleteClusterSecurityGroupVersionEnumTwoThousandAndTwelve1201 GetDeleteClusterSecurityGroupVersionEnum = "2012-12-01"
)

type GetDeleteClusterSecurityGroupQueryParams struct {
	Action                   GetDeleteClusterSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterSecurityGroupName string                                   `queryParam:"style=form,explode=true,name=ClusterSecurityGroupName"`
	Version                  GetDeleteClusterSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteClusterSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteClusterSecurityGroupRequest struct {
	QueryParams GetDeleteClusterSecurityGroupQueryParams
	Headers     GetDeleteClusterSecurityGroupHeaders
}

type GetDeleteClusterSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
