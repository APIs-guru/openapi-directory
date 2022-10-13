package operations

type GetEnableLoggingActionEnum string

const (
	GetEnableLoggingActionEnumEnableLogging GetEnableLoggingActionEnum = "EnableLogging"
)

type GetEnableLoggingVersionEnum string

const (
	GetEnableLoggingVersionEnumTwoThousandAndTwelve1201 GetEnableLoggingVersionEnum = "2012-12-01"
)

type GetEnableLoggingQueryParams struct {
	Action            GetEnableLoggingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	BucketName        string                      `queryParam:"style=form,explode=true,name=BucketName"`
	ClusterIdentifier string                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	S3KeyPrefix       *string                     `queryParam:"style=form,explode=true,name=S3KeyPrefix"`
	Version           GetEnableLoggingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableLoggingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableLoggingRequest struct {
	QueryParams GetEnableLoggingQueryParams
	Headers     GetEnableLoggingHeaders
}

type GetEnableLoggingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
