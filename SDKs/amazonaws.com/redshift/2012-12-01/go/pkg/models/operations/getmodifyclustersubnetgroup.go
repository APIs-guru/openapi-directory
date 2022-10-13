package operations

type GetModifyClusterSubnetGroupActionEnum string

const (
	GetModifyClusterSubnetGroupActionEnumModifyClusterSubnetGroup GetModifyClusterSubnetGroupActionEnum = "ModifyClusterSubnetGroup"
)

type GetModifyClusterSubnetGroupVersionEnum string

const (
	GetModifyClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201 GetModifyClusterSubnetGroupVersionEnum = "2012-12-01"
)

type GetModifyClusterSubnetGroupQueryParams struct {
	Action                 GetModifyClusterSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterSubnetGroupName string                                 `queryParam:"style=form,explode=true,name=ClusterSubnetGroupName"`
	Description            *string                                `queryParam:"style=form,explode=true,name=Description"`
	SubnetIds              []string                               `queryParam:"style=form,explode=true,name=SubnetIds"`
	Version                GetModifyClusterSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyClusterSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyClusterSubnetGroupRequest struct {
	QueryParams GetModifyClusterSubnetGroupQueryParams
	Headers     GetModifyClusterSubnetGroupHeaders
}

type GetModifyClusterSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
