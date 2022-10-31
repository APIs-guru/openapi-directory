package operations

type GetDeleteDbParameterGroupActionEnum string

const (
	GetDeleteDbParameterGroupActionEnumDeleteDbParameterGroup GetDeleteDbParameterGroupActionEnum = "DeleteDBParameterGroup"
)

type GetDeleteDbParameterGroupVersionEnum string

const (
	GetDeleteDbParameterGroupVersionEnumTwoThousandAndThirteen0110 GetDeleteDbParameterGroupVersionEnum = "2013-01-10"
)

type GetDeleteDbParameterGroupQueryParams struct {
	Action               GetDeleteDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbParameterGroupName string                               `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	Version              GetDeleteDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
