package operations

type GetDeleteDbClusterParameterGroupActionEnum string

const (
	GetDeleteDbClusterParameterGroupActionEnumDeleteDbClusterParameterGroup GetDeleteDbClusterParameterGroupActionEnum = "DeleteDBClusterParameterGroup"
)

type GetDeleteDbClusterParameterGroupVersionEnum string

const (
	GetDeleteDbClusterParameterGroupVersionEnumTwoThousandAndFourteen1031 GetDeleteDbClusterParameterGroupVersionEnum = "2014-10-31"
)

type GetDeleteDbClusterParameterGroupQueryParams struct {
	Action                      GetDeleteDbClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterParameterGroupName string                                      `queryParam:"style=form,explode=true,name=DBClusterParameterGroupName"`
	Version                     GetDeleteDbClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbClusterParameterGroupRequest struct {
	QueryParams GetDeleteDbClusterParameterGroupQueryParams
	Headers     GetDeleteDbClusterParameterGroupHeaders
}

type GetDeleteDbClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
