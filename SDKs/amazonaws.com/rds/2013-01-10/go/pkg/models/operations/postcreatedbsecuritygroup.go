package operations

type PostCreateDbSecurityGroupActionEnum string

const (
	PostCreateDbSecurityGroupActionEnumCreateDbSecurityGroup PostCreateDbSecurityGroupActionEnum = "CreateDBSecurityGroup"
)

type PostCreateDbSecurityGroupVersionEnum string

const (
	PostCreateDbSecurityGroupVersionEnumTwoThousandAndThirteen0110 PostCreateDbSecurityGroupVersionEnum = "2013-01-10"
)

type PostCreateDbSecurityGroupQueryParams struct {
	Action  PostCreateDbSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbSecurityGroupRequest struct {
	QueryParams PostCreateDbSecurityGroupQueryParams
	Headers     PostCreateDbSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
