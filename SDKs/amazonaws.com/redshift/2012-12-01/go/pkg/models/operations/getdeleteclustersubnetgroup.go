package operations

type GetDeleteClusterSubnetGroupActionEnum string

const (
	GetDeleteClusterSubnetGroupActionEnumDeleteClusterSubnetGroup GetDeleteClusterSubnetGroupActionEnum = "DeleteClusterSubnetGroup"
)

type GetDeleteClusterSubnetGroupVersionEnum string

const (
	GetDeleteClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201 GetDeleteClusterSubnetGroupVersionEnum = "2012-12-01"
)

type GetDeleteClusterSubnetGroupQueryParams struct {
	Action                 GetDeleteClusterSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterSubnetGroupName string                                 `queryParam:"style=form,explode=true,name=ClusterSubnetGroupName"`
	Version                GetDeleteClusterSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteClusterSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteClusterSubnetGroupRequest struct {
	QueryParams GetDeleteClusterSubnetGroupQueryParams
	Headers     GetDeleteClusterSubnetGroupHeaders
}

type GetDeleteClusterSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
