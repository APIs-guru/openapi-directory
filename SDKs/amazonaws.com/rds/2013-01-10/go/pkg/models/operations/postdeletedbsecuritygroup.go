package operations

type PostDeleteDbSecurityGroupActionEnum string

const (
	PostDeleteDbSecurityGroupActionEnumDeleteDbSecurityGroup PostDeleteDbSecurityGroupActionEnum = "DeleteDBSecurityGroup"
)

type PostDeleteDbSecurityGroupVersionEnum string

const (
	PostDeleteDbSecurityGroupVersionEnumTwoThousandAndThirteen0110 PostDeleteDbSecurityGroupVersionEnum = "2013-01-10"
)

type PostDeleteDbSecurityGroupQueryParams struct {
	Action  PostDeleteDbSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
