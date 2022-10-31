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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
