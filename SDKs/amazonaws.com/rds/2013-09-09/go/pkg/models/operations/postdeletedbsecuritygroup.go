package operations

type PostDeleteDbSecurityGroupActionEnum string

const (
	PostDeleteDbSecurityGroupActionEnumDeleteDbSecurityGroup PostDeleteDbSecurityGroupActionEnum = "DeleteDBSecurityGroup"
)

type PostDeleteDbSecurityGroupVersionEnum string

const (
	PostDeleteDbSecurityGroupVersionEnumTwoThousandAndThirteen0909 PostDeleteDbSecurityGroupVersionEnum = "2013-09-09"
)

type PostDeleteDbSecurityGroupQueryParams struct {
	Action  PostDeleteDbSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbSecurityGroupRequest struct {
	QueryParams PostDeleteDbSecurityGroupQueryParams
	Headers     PostDeleteDbSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
