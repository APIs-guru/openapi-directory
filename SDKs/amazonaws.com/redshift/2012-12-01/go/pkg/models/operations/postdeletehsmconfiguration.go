package operations

type PostDeleteHsmConfigurationActionEnum string

const (
	PostDeleteHsmConfigurationActionEnumDeleteHsmConfiguration PostDeleteHsmConfigurationActionEnum = "DeleteHsmConfiguration"
)

type PostDeleteHsmConfigurationVersionEnum string

const (
	PostDeleteHsmConfigurationVersionEnumTwoThousandAndTwelve1201 PostDeleteHsmConfigurationVersionEnum = "2012-12-01"
)

type PostDeleteHsmConfigurationQueryParams struct {
	Action  PostDeleteHsmConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteHsmConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteHsmConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteHsmConfigurationRequest struct {
	QueryParams PostDeleteHsmConfigurationQueryParams
	Headers     PostDeleteHsmConfigurationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteHsmConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
