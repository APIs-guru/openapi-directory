package operations

type PostDisableLoggingActionEnum string

const (
	PostDisableLoggingActionEnumDisableLogging PostDisableLoggingActionEnum = "DisableLogging"
)

type PostDisableLoggingVersionEnum string

const (
	PostDisableLoggingVersionEnumTwoThousandAndTwelve1201 PostDisableLoggingVersionEnum = "2012-12-01"
)

type PostDisableLoggingQueryParams struct {
	Action  PostDisableLoggingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableLoggingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableLoggingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisableLoggingRequest struct {
	QueryParams PostDisableLoggingQueryParams
	Headers     PostDisableLoggingHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableLoggingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
