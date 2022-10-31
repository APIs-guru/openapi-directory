package operations

type GetDeleteClusterParameterGroupActionEnum string

const (
	GetDeleteClusterParameterGroupActionEnumDeleteClusterParameterGroup GetDeleteClusterParameterGroupActionEnum = "DeleteClusterParameterGroup"
)

type GetDeleteClusterParameterGroupVersionEnum string

const (
	GetDeleteClusterParameterGroupVersionEnumTwoThousandAndTwelve1201 GetDeleteClusterParameterGroupVersionEnum = "2012-12-01"
)

type GetDeleteClusterParameterGroupQueryParams struct {
	Action             GetDeleteClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ParameterGroupName string                                    `queryParam:"style=form,explode=true,name=ParameterGroupName"`
	Version            GetDeleteClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteClusterParameterGroupRequest struct {
	QueryParams GetDeleteClusterParameterGroupQueryParams
	Headers     GetDeleteClusterParameterGroupHeaders
}

type GetDeleteClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
