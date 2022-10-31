package operations

type GetCreateDbParameterGroupActionEnum string

const (
	GetCreateDbParameterGroupActionEnumCreateDbParameterGroup GetCreateDbParameterGroupActionEnum = "CreateDBParameterGroup"
)

type GetCreateDbParameterGroupVersionEnum string

const (
	GetCreateDbParameterGroupVersionEnumTwoThousandAndThirteen0212 GetCreateDbParameterGroupVersionEnum = "2013-02-12"
)

type GetCreateDbParameterGroupQueryParams struct {
	Action                 GetCreateDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbParameterGroupFamily string                               `queryParam:"style=form,explode=true,name=DBParameterGroupFamily"`
	DbParameterGroupName   string                               `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	Description            string                               `queryParam:"style=form,explode=true,name=Description"`
	Version                GetCreateDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateDbParameterGroupRequest struct {
	QueryParams GetCreateDbParameterGroupQueryParams
	Headers     GetCreateDbParameterGroupHeaders
}

type GetCreateDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
