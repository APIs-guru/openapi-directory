package operations

type DescribeObjectPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=Path"`
}

type DescribeObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeObjectRequest struct {
	PathParams DescribeObjectPathParams
	Headers    DescribeObjectHeaders
}

type DescribeObjectResponse struct {
	ContainerNotFoundException *interface{}
	ContentType                string
	DescribeObjectResponse     map[string]interface{}
	InternalServerError        *interface{}
	ObjectNotFoundException    *interface{}
	StatusCode                 int64
}
