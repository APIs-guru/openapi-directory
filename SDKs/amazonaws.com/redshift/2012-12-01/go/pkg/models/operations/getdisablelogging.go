package operations

type GetDisableLoggingActionEnum string

const (
	GetDisableLoggingActionEnumDisableLogging GetDisableLoggingActionEnum = "DisableLogging"
)

type GetDisableLoggingVersionEnum string

const (
	GetDisableLoggingVersionEnumTwoThousandAndTwelve1201 GetDisableLoggingVersionEnum = "2012-12-01"
)

type GetDisableLoggingQueryParams struct {
	Action            GetDisableLoggingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                       `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetDisableLoggingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableLoggingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableLoggingRequest struct {
	QueryParams GetDisableLoggingQueryParams
	Headers     GetDisableLoggingHeaders
}

type GetDisableLoggingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
