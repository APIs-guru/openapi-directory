package operations

type PostEnableLoggingActionEnum string

const (
	PostEnableLoggingActionEnumEnableLogging PostEnableLoggingActionEnum = "EnableLogging"
)

type PostEnableLoggingVersionEnum string

const (
	PostEnableLoggingVersionEnumTwoThousandAndTwelve1201 PostEnableLoggingVersionEnum = "2012-12-01"
)

type PostEnableLoggingQueryParams struct {
	Action  PostEnableLoggingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableLoggingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableLoggingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostEnableLoggingRequest struct {
	QueryParams PostEnableLoggingQueryParams
	Headers     PostEnableLoggingHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableLoggingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
