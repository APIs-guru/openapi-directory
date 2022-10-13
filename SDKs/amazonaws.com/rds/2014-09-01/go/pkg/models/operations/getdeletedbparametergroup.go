package operations

type GetDeleteDbParameterGroupActionEnum string

const (
	GetDeleteDbParameterGroupActionEnumDeleteDbParameterGroup GetDeleteDbParameterGroupActionEnum = "DeleteDBParameterGroup"
)

type GetDeleteDbParameterGroupVersionEnum string

const (
	GetDeleteDbParameterGroupVersionEnumTwoThousandAndFourteen0901 GetDeleteDbParameterGroupVersionEnum = "2014-09-01"
)

type GetDeleteDbParameterGroupQueryParams struct {
	Action               GetDeleteDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbParameterGroupName string                               `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	Version              GetDeleteDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbParameterGroupRequest struct {
	QueryParams GetDeleteDbParameterGroupQueryParams
	Headers     GetDeleteDbParameterGroupHeaders
}

type GetDeleteDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
