package operations

type PostCreateDbParameterGroupActionEnum string

const (
	PostCreateDbParameterGroupActionEnumCreateDbParameterGroup PostCreateDbParameterGroupActionEnum = "CreateDBParameterGroup"
)

type PostCreateDbParameterGroupVersionEnum string

const (
	PostCreateDbParameterGroupVersionEnumTwoThousandAndFourteen0901 PostCreateDbParameterGroupVersionEnum = "2014-09-01"
)

type PostCreateDbParameterGroupQueryParams struct {
	Action  PostCreateDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateDbParameterGroupRequest struct {
	QueryParams PostCreateDbParameterGroupQueryParams
	Headers     PostCreateDbParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
